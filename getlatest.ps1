if ($args.count -eq 0) 
{
	Write-Host "     cannot run this script directly"
	exit 0
}

$branch = $args[0];if ([string]::IsNullOrEmpty($branch)) { throw "No branch or folder & version specified."}
$waitForKey = $args[1]


cls

#****************************
$folder = 'Form.Service'
Write-Host "---------------------------------------"; Write-Host "Get Latest Of '$folder'"; Write-Host ""
cd $folder
	git checkout $branch
	git pull
	cd ..
	
Write-Host "---------------------------------------"
if (-NOT ([string]::IsNullOrEmpty($waitForKey))) {Write-Host "Press any key to continue..."; $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")}
#****************************

#****************************
$folder = 'Nomination.Service'
Write-Host "---------------------------------------"; Write-Host "Get Latest Of '$folder'"; Write-Host ""
cd $folder
	git checkout $branch
	git pull
	cd ..
	
Write-Host "---------------------------------------"
if (-NOT ([string]::IsNullOrEmpty($waitForKey))) {Write-Host "Press any key to continue..."; $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")}
#****************************


#****************************
$folder = 'Scholarship'
Write-Host "---------------------------------------"; Write-Host "Get Latest Of '$folder'"; Write-Host ""
cd $folder
	git checkout $branch
	git pull
	cd ..
	
Write-Host "---------------------------------------"
if (-NOT ([string]::IsNullOrEmpty($waitForKey))) {Write-Host "Press any key to continue..."; $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")}
#****************************

#****************************
$folder = 'Scholarship.Common'
Write-Host "---------------------------------------"; Write-Host "Get Latest Of '$folder'"; Write-Host ""
cd $folder
	git checkout $branch
	git pull
	cd ..
	
Write-Host "---------------------------------------"
if (-NOT ([string]::IsNullOrEmpty($waitForKey))) {Write-Host "Press any key to continue..."; $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")}
#****************************

#****************************
$folder = 'Scholarship.Database'
Write-Host "---------------------------------------"; Write-Host "Get Latest Of '$folder'"; Write-Host ""
cd $folder
	git checkout $branch
	git pull
	cd ..
	
Write-Host "---------------------------------------"
if (-NOT ([string]::IsNullOrEmpty($waitForKey))) {Write-Host "Press any key to continue..."; $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")}
#****************************

#****************************
$folder = 'Scholarship.Messaging'
Write-Host "---------------------------------------"; Write-Host "Get Latest Of '$folder'"; Write-Host ""
cd $folder
	git checkout $branch
	git pull
	cd ..
	
Write-Host "---------------------------------------"
if (-NOT ([string]::IsNullOrEmpty($waitForKey))) {Write-Host "Press any key to continue..."; $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")}
#****************************


#****************************
$folder = 'Scholarship.Security'
Write-Host "---------------------------------------"; Write-Host "Get Latest Of '$folder'"; Write-Host ""
cd $folder
	git checkout $branch
	git pull
	cd ..
	
Write-Host "---------------------------------------"
if (-NOT ([string]::IsNullOrEmpty($waitForKey))) {Write-Host "Press any key to continue..."; $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")}
#****************************

#****************************
$folder = 'Scholarship.Service'
Write-Host "---------------------------------------"; Write-Host "Get Latest Of '$folder'"; Write-Host ""
cd $folder
	git checkout $branch
	git pull
	cd ..
	
Write-Host "---------------------------------------"
if (-NOT ([string]::IsNullOrEmpty($waitForKey))) {Write-Host "Press any key to continue..."; $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")}
#****************************

#****************************
$folder = 'Scholarship.ServiceClient'
Write-Host "---------------------------------------"; Write-Host "Get Latest Of '$folder'"; Write-Host ""
cd $folder
	git checkout $branch
	git pull
	cd ..
	
Write-Host "---------------------------------------"
if (-NOT ([string]::IsNullOrEmpty($waitForKey))) {Write-Host "Press any key to continue..."; $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")}
#****************************
