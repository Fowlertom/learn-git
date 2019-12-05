if ($args.count -eq 0) 
{
	Write-Host "     Undo_and_getlatest 'branch' 'folder(optional)"
	exit 0
}

$branch = $args[0];if ([string]::IsNullOrEmpty($branch)) { throw "No branch or folder & version specified."}
$folder = $args[1];

cls

Write-Host "---------------------------------------"; Write-Host "Undo-ing all changes, resetting pointer to server branch."; Write-Host ""

if (-NOT ([string]::IsNullOrEmpty($folder))) {cd $folder}
git checkout $branch
git pull --rebase
git pull -s recursive -X theirs
git reset --hard origin/$branch

Write-Host "---------------------------------------"; 
Write-Host "---------------------------------------"; 
Write-Host "Trying to do 'git pull'."; 
git pull
Write-Host "---------------------------------------"; 

if (-NOT ([string]::IsNullOrEmpty($folder))) {cd ..}
	
Write-Host "---------------------------------------"
if (-NOT ([string]::IsNullOrEmpty($waitForKey))) {Write-Host "Press any key to continue..."; $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")}
#****************************


