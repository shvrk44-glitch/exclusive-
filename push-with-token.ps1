# Lumina & Co. Events - Push with GitHub Personal Access Token
param(
    [string]$Token
)

if (-not $Token) {
    $Token = Read-Host "Paste your GitHub Personal Access Token (starts with ghp_)"
}

if ([string]::IsNullOrWhiteSpace($Token)) {
    Write-Host "No token provided. Aborted." -ForegroundColor Red
    exit 1
}

$repoUrl = "https://$($Token.Trim())@github.com/shvrk44-glitch/exclusive-.git"

Write-Host "Setting authenticated remote URL..." -ForegroundColor Cyan
git remote set-url origin $repoUrl

Write-Host "Pushing main branch to GitHub..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nSUCCESS! Successfully pushed to https://github.com/shvrk44-glitch/exclusive-" -ForegroundColor Green
    Write-Host "Resetting local remote URL to standard HTTPS (removing token from config)..."
    git remote set-url origin https://github.com/shvrk44-glitch/exclusive-.git
} else {
    Write-Host "`nPush failed. Please verify that your token has 'repo' permissions." -ForegroundColor Red
}

