@echo off

def %localappdata%\Microsoft\WindowsApps\kjspkg >nul 2>&1
def %localappdata%\Microsoft\WindowsApps\kjspkg.py >nul 2>&1
curl https://raw.githubusercontent.com/Modern-Modpacks/kjspkg/main/run.bat > %localappdata%\Microsoft\WindowsApps\kjspkg.bat
curl https://raw.githubusercontent.com/Modern-Modpacks/kjspkg/main/app.py > %localappdata%\Microsoft\WindowsApps\kjspkg.py

curl -s https://raw.githubusercontent.com/Modern-Modpacks/kjspkg/main/requirements.txt > kjspkgreqs.txt
python -m pip -q install -r kjspkgreqs.txt >nul 2>&1
del kjspkgreqs.txt

msg "%username%" "KJSPKG install successful! Reload your terminal for the command to work"
