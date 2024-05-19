@echo off
cd /d C:\Users\anton\Desktop\Weight Tracker

FOR /F "tokens=5" %%i IN ('netstat -ano ^| findstr :3000') DO taskkill /F /PID %%i

start "" "C:\Program Files\nodejs\node.exe" server.js

timeout /t 5 /nobreak >nul

start "" "cmd.exe" /c "cd /d C:\Users\anton\Desktop\Weight Tracker && http-server -p 8080"

timeout /t 5 /nobreak >nul

start "" "http://localhost:8080"
