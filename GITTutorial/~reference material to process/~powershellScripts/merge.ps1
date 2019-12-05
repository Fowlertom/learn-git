if ($args.count -eq 0) 
{
	Write-Host "      merge 'source' 'target' 'folder(optional)"
	exit 0
}

$sourceBranch = $args[0];if ([string]::IsNullOrEmpty($sourceBranch)) { throw "No source branch specified."}
$targetBranch = $args[1];if ([string]::IsNullOrEmpty($targetBranch)) { throw "No target branch specified."}
$folder = $args[2];

cls

Write-Host "---------------------------------------"; Write-Host "Merging '$sourceBranch' into '$targetBranch'."; Write-Host ""

if (-NOT ([string]::IsNullOrEmpty($folder))) {cd $folder}

git checkout $sourceBranch
git pull

git checkout $targetBranch
git pull

git rebase $sourceBranch
git push -f

Write-Host "---------------------------------------"; 

if (-NOT ([string]::IsNullOrEmpty($folder))) {cd ..}
	
Write-Host "---------------------------------------"
if (-NOT ([string]::IsNullOrEmpty($waitForKey))) {Write-Host "Press any key to continue..."; $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")}
#****************************