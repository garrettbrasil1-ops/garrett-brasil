@echo off
cd /d "%~dp0"
git remote remove origin 2>nul
git remote add origin https://github.com/garrettbrasil1-ops/garrett-brasil.git
git push -f origin main
pause
