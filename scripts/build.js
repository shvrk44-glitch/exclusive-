/**
 * Lumina & Co. Events - Production Build Script
 * Zero-dependency, ultra-fast production pipeline
 * Generates optimized, minified bundle in /dist
 */

import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.join(rootDir, 'dist');

const startTime = Date.now();

console.log('✨ [Lumina Build] Initiating production build pipeline...');

// 1. Prepare clean dist directory
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}
fs.mkdirSync(distDir, { recursive: true });
fs.mkdirSync(path.join(distDir, 'css'), { recursive: true });
fs.mkdirSync(path.join(distDir, 'js'), { recursive: true });
fs.mkdirSync(path.join(distDir, 'docs'), { recursive: true });

// Helper: Minify CSS
function minifyCSS(css) {
  return css
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
    .replace(/\s+/g, ' ')             // Collapse whitespace
    .replace(/\s*([\{\}:;,])\s*/g, '$1') // Remove spaces around delimiters
    .replace(/;\}/g, '}')             // Remove trailing semicolon
    .trim();
}

// Helper: Minify JS safely
function minifyJS(js) {
  return js
    .replace(/\/\*[\s\S]*?\*\//g, '') // Remove block comments
    .replace(/(^|[^:])\/\/[^\n]*/g, '$1') // Remove line comments safely
    .replace(/\n\s*\n/g, '\n')        // Collapse empty lines
    .trim();
}

// Helper: Bundle modular JS
function bundleJavaScript() {
  const dataJsPath = path.join(rootDir, 'js', 'data.js');
  const appJsPath = path.join(rootDir, 'js', 'app.js');

  const dataJsContent = fs.readFileSync(dataJsPath, 'utf-8');
  const appJsContent = fs.readFileSync(appJsPath, 'utf-8');

  // Strip `export ` keywords from data.js
  let cleanData = dataJsContent.replace(/export\s+(const|let|var|function|class)/g, '$1');

  // Remove `import { ... } from './data.js';` from app.js
  let cleanApp = appJsContent.replace(/import\s*\{[\s\S]*?\}\s*from\s*['"]\.\/data\.js['"];?/g, '');
  cleanApp = cleanApp.replace(/export\s+function\s+showToast/g, 'function showToast');

  // Combine into single production IIFE/module bundle
  const combined = `/**
 * Lumina & Co. Events - Production Bundle
 * Built on ${new Date().toISOString()}
 */
(function() {
'use strict';

${cleanData}

${cleanApp}

})();`;

  return minifyJS(combined);
}

// 2. Process Stylesheet
const cssSrcPath = path.join(rootDir, 'css', 'style.css');
const rawCSS = fs.readFileSync(cssSrcPath, 'utf-8');
const minCSS = minifyCSS(rawCSS);
const cssDistPath = path.join(distDir, 'css', 'style.min.css');
fs.writeFileSync(cssDistPath, minCSS, 'utf-8');

// 3. Process JavaScript Bundle
const jsBundle = bundleJavaScript();
const jsDistPath = path.join(distDir, 'js', 'app.bundle.js');
fs.writeFileSync(jsDistPath, jsBundle, 'utf-8');

// 4. Process HTML
const htmlSrcPath = path.join(rootDir, 'index.html');
let rawHTML = fs.readFileSync(htmlSrcPath, 'utf-8');

// Replace asset references for production
let prodHTML = rawHTML
  .replace(/href=["']\.\/css\/style\.css["']/g, 'href="./css/style.min.css"')
  .replace(/<script\s+type=["']module["']\s+src=["']\.\/js\/app\.js["']><\/script>/g, '<script defer src="./js/app.bundle.js"></script>')
  .replace(/<!--[\s\S]*?-->/g, '') // Strip comments
  .replace(/^\s*[\r\n]/gm, '');     // Clean blank lines

const htmlDistPath = path.join(distDir, 'index.html');
fs.writeFileSync(htmlDistPath, prodHTML, 'utf-8');

// 5. Copy Documentation
fs.copyFileSync(path.join(rootDir, 'README.md'), path.join(distDir, 'docs', 'README.md'));
fs.copyFileSync(path.join(rootDir, 'PRD.md'), path.join(distDir, 'docs', 'PRD.md'));

// 6. Generate Build Report
const duration = Date.now() - startTime;

function getStat(filePath) {
  const content = fs.readFileSync(filePath);
  const rawSize = (content.length / 1024).toFixed(2);
  const gzippedSize = (zlib.gzipSync(content).length / 1024).toFixed(2);
  return { rawSize: `${rawSize} KB`, gzippedSize: `${gzippedSize} KB` };
}

const htmlStat = getStat(htmlDistPath);
const cssStat = getStat(cssDistPath);
const jsStat = getStat(jsDistPath);

console.log('\n======================================================');
console.log('  🏛️  LUMINA & CO. PRODUCTION BUILD REPORT');
console.log('======================================================');
console.log(`  Output Directory:     ${distDir}`);
console.log(`  Build Duration:       ${duration} ms`);
console.log('------------------------------------------------------');
console.log(`  File                  Raw Size     Gzip Size`);
console.log(`  ----------------------------------------------------`);
console.log(`  index.html            ${htmlStat.rawSize.padEnd(12)} ${htmlStat.gzippedSize}`);
console.log(`  css/style.min.css     ${cssStat.rawSize.padEnd(12)} ${cssStat.gzippedSize}`);
console.log(`  js/app.bundle.js      ${jsStat.rawSize.padEnd(12)} ${jsStat.gzippedSize}`);
console.log('======================================================');
console.log('  ✅ Build Status: SUCCESSFUL & DEPLOYMENT-READY\n');

