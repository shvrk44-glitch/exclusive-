# Lumina & Co. Events - One-Click GitHub Deployment Script
param(
    [string]$RepoUrl
)

$ErrorActionPreference = "Stop"

if (-not $RepoUrl) {
    $RepoUrl = Read-Host "Enter your GitHub repository URL (e.g., https://github.com/<username>/lumina-events.git)"
}

if ([string]::IsNullOrWhiteSpace($RepoUrl)) {
    Write-Host "❌ No repository URL provided. Deployment halted." -ForegroundColor Red
    exit 1
}

Write-Host "✨ Connecting remote origin: $RepoUrl..." -ForegroundColor Cyan
git remote remove origin 2>$null
git remote add origin $RepoUrl
git branch -M main

Write-Host "🚀 Pushing codebase to main branch on GitHub..." -ForegroundColor Cyan
git push -u origin main

Write-Host "`n✅ Successfully pushed to GitHub!" -ForegroundColor Green
Write-Host "--------------------------------------------------------"
Write-Host "👉 Next Step: Enable GitHub Pages"
Write-Host "1. Go to your repository on GitHub: Settings -> Pages"
Write-Host "2. Under 'Source', select 'GitHub Actions'"
Write-Host "3. The included workflow (.github/workflows/deploy.yml) will automatically build and publish your site live!"
Write-Host "--------------------------------------------------------`n"

