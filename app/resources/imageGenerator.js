// @flow
import { remote } from 'electron';

export default class ImageGenerator {
  static findImage(resourceType: string) {
    let dir = '';
    if (process.env.NODE_ENV === 'development') {
      dir = '../assets/azure/';
    } else {
      dir = `${remote.app.getAppPath()}../../assets/azure/`;
    }

    switch (resourceType) {
      case 'Microsoft.Web/serverfarms':
        return `${dir}Azure App Service_COLOR.png`;
      case 'Microsoft.Web/sites':
        return `${dir}Azure App Service - Web App_COLOR.png`;
      case 'Microsoft.Insights/components':
        return `${dir}Azure Application Insights_COLOR.png`;
      case 'Microsoft.Storage/storageAccounts':
        return `${dir}Azure Storage.png`;
      case 'Microsoft.EventHub/namespaces':
        return `${dir}Azure Event Hubs_COLOR.png`;
      case 'Microsoft.Network/trafficManagerProfiles':
        return `${dir}Azure Traffic Manager_COLOR.png`;
      case 'Microsoft.Network/trafficManagerProfiles/azureEndpoints':
        return `${dir}Azure Traffic Manager.png`;
      case 'Microsoft.NotificationHubs/namespaces':
        return `${dir}Azure Notification Hubs_COLOR.png`;
      case 'Microsoft.Resources/deployments':
        return `${dir}Unidentified feature object_COLOR.png`;
      case 'Microsoft.Network/networkInterfaces':
        return `${dir}Azure Virtual Network.png`;
      case 'Microsoft.Network/virtualNetworks':
        return `${dir}Azure Virtual Network_COLOR.png`;
      case 'Microsoft.Network/publicIpAddresses':
        return `${dir}Azure Virtual Network.png`;
      case 'Microsoft.Network/publicIPAddresses':
        return `${dir}Azure Virtual Network.png`;
      case 'Microsoft.Network/networkSecurityGroups':
        return `${dir}Azure Virtual Network.png`;
      case 'Microsoft.Compute/virtualMachines':
        return `${dir}Azure Virtual Machine_COLOR.png`;
      case 'Microsoft.Network/applicationGateways':
        return `${dir}Azure Application Gateway_COLOR.png`;
      case 'Microsoft.Search/searchServices':
        return `${dir}Azure Search_COLOR.png`;
      case 'Microsoft.ContainerService/containerServices':
        return `${dir}Azure Container Service_COLOR.png`;
      case 'Microsoft.Web/sites/domainOwnershipIdentifiers':
        return `${dir}Azure App Service - Web App (was Websites).png`;
      case 'Microsoft.Automation/automationAccounts':
        return `${dir}Azure Automation_COLOR.png`;
      case 'Microsoft.Compute/availabilitySets':
        return `${dir}Azure Virtual Machines - Availability Set_COLOR.png`;
      case 'Microsoft.ApiManagement/service':
        return `${dir}Azure API Management_COLOR.png`;
      case 'Microsoft.Backup/BackupVault/registeredContainers/protectedItems':
        return `${dir}Azure Backup_COLOR.png`;
      case 'Microsoft.Backup/BackupVault':
        return `${dir}Azure Backup - Recovery Vault.png`;
      default:
        return `${dir}Unidentified feature object_COLOR.png`;
    }
  }
}
