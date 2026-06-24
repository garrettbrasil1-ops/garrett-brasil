@echo off
chcp 65001 >nul
echo.
echo ============================================
echo   GARRETT BRASIL — Enviando imagens e PDFs
echo ============================================
echo.

cd /d "%~dp0"

echo Configurando repositorio remoto...
git remote remove origin 2>nul
git remote add origin https://github.com/garrettbrasil1-ops/garrett-brasil.git

echo.
echo Enviando pasta imagem/ e docs/ para o GitHub...
echo Isso pode demorar alguns minutos dependendo da internet.
echo.
echo  >> Se abrir janela de login no navegador, faca login
echo  >> e clique em "Authorize git-ecosystem"
echo.

git push -f origin master:main

echo.
if %ERRORLEVEL% EQU 0 (
    echo ============================================
    echo   SUCESSO! Imagens e PDFs enviados.
    echo   Acesse: https://github.com/garrettbrasil1-ops/garrett-brasil
    echo ============================================
) else (
    echo ============================================
    echo   ERRO. Codigo: %ERRORLEVEL%
    echo   Anote o erro acima e informe ao assistente.
    echo ============================================
)
echo.
pause
