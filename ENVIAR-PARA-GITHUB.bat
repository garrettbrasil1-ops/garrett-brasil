@echo off
chcp 65001 >nul
echo.
echo ============================================
echo   GARRETT BRASIL — Envio para o GitHub
echo ============================================
echo.

cd /d "%~dp0"

echo [1/3] Configurando repositório remoto...
git remote remove origin 2>nul
git remote add origin https://github.com/garrettbrasil1-ops/garrett-brasil.git

echo [2/3] Enviando arquivos para o GitHub...
echo.
echo  Uma janela de LOGIN do GitHub vai abrir no navegador.
echo  Faça login normalmente e clique em "Authorize".
echo.
git push -u origin master

echo.
if %ERRORLEVEL% EQU 0 (
    echo ============================================
    echo   SUCESSO! Site enviado para o GitHub.
    echo   Acesse: https://github.com/garrettbrasil1-ops/garrett-brasil
    echo ============================================
) else (
    echo ============================================
    echo   ERRO no envio. Codigo: %ERRORLEVEL%
    echo   Tente fechar e abrir o arquivo novamente.
    echo ============================================
)
echo.
pause
