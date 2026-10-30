/**
 * Lumina & Co. Events - Lightweight Static HTTP Server
 * Supports development mode and production /dist preview mode
 */

import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const isDist = process.argv.includes('--dist');
const targetDir = isDist ? path.join(rootDir, 'dist') : rootDir;
const PORT = process.env.PORT || (isDist ? 4173 : 3000);

const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.md': 'text/markdown; charset=utf-8'
};

const server = http.createServer((req, res) => {
  let safeUrl = decodeURI(req.url.split('?')[0]);
  if (safeUrl === '/') safeUrl = '/index.html';

  let filePath = path.join(targetDir, safeUrl);

  // Security check to avoid directory traversal
  if (!filePath.startsWith(targetDir)) {
    res.writeHead(403);
    res.end('403 Forbidden');
    return;
  }

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      res.end(`404 Not Found: ${safeUrl}`);
      return;
    }

    const ext = path.extname(filePath).toLowerCase();
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    res.writeHead(200, {
      'Content-Type': contentType,
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': isDist ? 'public, max-age=3600' : 'no-cache'
    });

    fs.createReadStream(filePath).pipe(res);
  });
});

server.listen(PORT, () => {
  console.log(`\n✨ [Lumina Server] Serving ${isDist ? 'PRODUCTION (dist)' : 'DEVELOPMENT'} mode`);
  console.log(`🚀 Access URL: http://localhost:${PORT}\n`);
});

