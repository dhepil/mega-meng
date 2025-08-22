
@echo off
setlocal EnableExtensions EnableDelayedExpansion
title mega_meng Runner (frontend + optional backend)

set "FORCE_REINSTALL=0"
set "WITH_BACKEND=auto"
set "DEV_PORT=5173"

:ARGS
if "%~1"=="" goto AFTER_ARGS
if /I "%~1"=="--reinstall" set "FORCE_REINSTALL=1" & shift & goto ARGS
if /I "%~1"=="--backend"   set "WITH_BACKEND=yes" & shift & goto ARGS
if /I "%~1"=="--no-backend" set "WITH_BACKEND=no" & shift & goto ARGS
for /f "tokens=1,2 delims==" %%A in ("%~1") do (
  if /I "%%~A"=="--port" set "DEV_PORT=%%~B" & shift & goto ARGS
)
shift
goto ARGS

:AFTER_ARGS
pushd "%~dp0"
if not exist .env if exist .env.example copy /Y .env.example .env >nul

echo [frontend] installing deps...
if "%FORCE_REINSTALL%"=="1" (
  call npm install || goto FAIL
) else (
  if exist node_modules (
    echo [frontend] node_modules present, skipping install. Use --reinstall to force.
  ) else (
    call npm install || goto FAIL
  )
)

echo [frontend] starting dev server on port %DEV_PORT% ...
start "mega_meng frontend" cmd /k "npm run dev -- --port %DEV_PORT%"

:URLS
set "BASE=http://localhost:%DEV_PORT%"
echo Ready:
echo   Home ............ %BASE%/
echo   Yuzha (Launcher)  %BASE%/yuzha
echo   Apps grid ....... %BASE%/yuzha/apps
goto EXIT

:FAIL
echo [ERROR] Something failed. Check the logs above.
goto EXIT

:EXIT
echo.
pause >nul
popd
endlocal
