#https://stackoverflow.com/questions/12850487/invoke-a-second-script-with-arguments-from-a-script

$branch = 'release/19.2'
& .\getlatest.ps1 $branch 'WAITFORKEYPRESS'
