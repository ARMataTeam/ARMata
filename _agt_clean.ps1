$rootPath = split-path -parent $MyInvocation.MyCommand.Path;
Write-Output($rootPath);

$templatesSubdirs = "$($rootPath)\azure-quickstart-templates\";

Get-ChildItem -Path "$($templatesSubdirs)" -Exclude "*.json"  -File -Recurse | ? { $_.FullName -notmatch '.github' } | foreach { ($_.Delete()); }
Write-Output("Removed");