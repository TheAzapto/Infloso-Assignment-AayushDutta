@echo off
echo Installing frontend and backend dependencies in parallel...

start "Frontend Install" cmd /c "cd frontend && npm install"

start "Backend Install" cmd /c "cd backend && npm install"

echo Both installations started in parallel.
pause