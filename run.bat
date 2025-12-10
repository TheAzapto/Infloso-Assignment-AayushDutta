@echo off
echo Starting frontend and backend in parallel...

REM Start frontend
start "Frontend Server" cmd /c "cd frontend && npm start"

REM Start backend
start "Backend Server" cmd /c "cd backend && npm start"

echo Both servers launched in parallel.
pause
