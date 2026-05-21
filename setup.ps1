# GAT Campus Compass AI - dependency setup
# Run from project root: .\setup.ps1

$ErrorActionPreference = "Stop"
Set-Location $PSScriptRoot

Write-Host "Installing npm dependencies..."
npm install

Write-Host "Done! Run: npm run dev"
Write-Host "Then open http://localhost:3000"
