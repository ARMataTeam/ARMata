// @flow

export default class ResourceTemplateProvider {
  static getTemplate(resourceType: string) {
    switch (resourceType) {
      case 'Microsoft.Web/serverfarms':
        return 'Azure App Service_COLOR.png';
      case 'Microsoft.Web/sites':
        return 'Azure App Service - Web App_COLOR.png';
      case 'Microsoft.Insights/components':
        return 'Azure Application Insights_COLOR.png';
      case 'Microsoft.Storage/storageAccounts':
        return 'Azure Storage.png';
      case 'Microsoft.EventHub/namespaces':
        return 'Azure Event Hubs_COLOR.png';
      case 'Microsoft.Network/trafficManagerProfiles':
        return 'Azure Traffic Manager_COLOR.png';
      case 'Microsoft.Network/trafficManagerProfiles/azureEndpoints':
        return 'Azure Traffic Manager.png';
      case 'Microsoft.NotificationHubs/namespaces':
        return 'Azure Notification Hubs_COLOR.png';
      case 'Microsoft.Resources/deployments':
        return 'Unidentified feature object_COLOR.png';
      case 'Microsoft.Network/networkInterfaces':
        return 'Azure Virtual Network.png';
      case 'Microsoft.Network/virtualNetworks':
        return 'Azure Virtual Network_COLOR.png';
      case 'Microsoft.Network/publicIpAddresses':
        return 'Azure Virtual Network.png';
      case 'Microsoft.Network/publicIPAddresses':
        return 'Azure Virtual Network.png';
      case 'Microsoft.Network/networkSecurityGroups':
        return 'Azure Virtual Network.png';
      case 'Microsoft.Compute/virtualMachines':
        return 'Azure Virtual Machine_COLOR.png';
      case 'Microsoft.Network/applicationGateways':
        return 'Azure Application Gateway_COLOR.png';
      case 'Microsoft.Search/searchServices':
        return 'Azure Search_COLOR.png';
      case 'Microsoft.ContainerService/containerServices':
        return 'Azure Container Service_COLOR.png';
      case 'Microsoft.Web/sites/domainOwnershipIdentifiers':
        return 'Azure App Service - Web App (was Websites).png';
      case 'Microsoft.Automation/automationAccounts':
        return 'Azure Automation_COLOR.png';
      case 'Microsoft.Compute/availabilitySets':
        return 'Azure Virtual Machines - Availability Set_COLOR.png';
      case 'Microsoft.ApiManagement/service':
        return 'Azure API Management_COLOR.png';
      case 'Microsoft.Backup/BackupVault/registeredContainers/protectedItems':
        return 'Azure Backup_COLOR.png';
      case 'Microsoft.Backup/BackupVault':
        return 'Azure Backup - Recovery Vault.png';
      default:
        return 'Unidentified feature object_COLOR.png';
    }
  }
}
