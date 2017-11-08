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
      case 'Microsoft.AnalysisServices/servers':
        return `${dir}Analysis Service.png`;
      case 'Microsoft.Authorization/locks':
        return `${dir}Azure Acitve Directory Access Control.png`;
      case 'Microsoft.Batch/batchAccounts':
        return `${dir}Azure Batch.png`;
      case 'Microsoft.Cdn/profiles':
        return `${dir}Azure Content Delivery Network (CDN)_COLOR.png`;
      case 'Microsoft.CognitiveServices/accounts':
        return `${dir}Azure Cognative Services_COLOR.png`;
      case 'Microsoft.ContainerInstance/containerGroups':
        return `${dir}Azure Container Service.png`;
      case 'Microsoft.ContainerRegistry/registries':
        return `${dir}Azure Container Service_COLOR.png`;
      case 'Microsoft.DataFactory/dataFactories':
        return `${dir}Azure Data Factory_COLOR.png`;
      case 'Microsoft.DataLakeAnalytics/accounts':
        return `${dir}Azure Data Lake Analytics_COLOR.png`;
      case 'Microsoft.DataLakeStore/accounts':
        return `${dir}Azure Data Lake Store_COLOR.png`;
      case 'Microsoft.DocumentDB/databaseAccounts':
        return `${dir}Azure DocumentDB_COLOR.png`;
      case 'Microsoft.DomainRegistration/domains':
        return `${dir}Azure DNS_COLOR.png`;
      case 'Microsoft.DevTestLab/labs':
        return `${dir}Azure DevTest Labs_COLOR.png`;
      case 'Microsoft.HDInsight/clusters':
        return `${dir}Azure HDInsight_COLOR.png`;
      case 'Microsoft.Devices/IotHubs':
        return `${dir}Azure IoT Hub.png`;
      case 'Microsoft.Devices/IotHubs/eventHubEndpoints/ConsumerGroups':
        return `${dir}Azure IoT Hub.png`;
      case 'Microsoft.KeyVault/vaults':
        return `${dir}Azure KeyVault_COLOR.png`;
      case 'Microsoft.Network/loadBalancers':
        return `${dir}Azure Load Balancer (feature)_COLOR.png`;
      case 'Microsoft.Cache/Redis':
        return `${dir}Azure Cache Redis Product icon_COLOR.png`;
      case 'Microsoft.PowerBI/workspaceCollections':
        return `${dir}Power BI Embedded.png`;
      case 'Microsoft.Logic/integrationAccounts':
        return `${dir}Logic Apps_COLOR.png`;
      case 'Microsoft.StorSimple/managers':
        return `${dir}Azure StorSimple_COLOR.png`;
      case 'Microsoft.Sql/servers':
        return `${dir}Azure SQL Database (generic)_COLOR.png`;
      case 'Microsoft.StreamAnalytics/streamingjobs':
        return `${dir}Azure Stream Analytics_COLOR.png`;
      case 'Microsoft.ServiceBus/namespaces':
        return `${dir}Azure Service Bus_COLOR.png`;
      case 'Microsoft.ServiceFabric/clusters':
        return `${dir}Azure Service Fabric_COLOR.png`;
      case 'Microsoft.RecoveryServices/vaults':
        return `${dir}Azure Site Recovery _COLOR.png`;
      case 'Microsoft.Scheduler/jobCollections':
        return `${dir}Azure Scheduler.png`;
      case 'Microsoft.MachineLearning/commitmentPlans':
        return `${dir}Azure Machine Learning_COLOR.png`;
      case 'Microsoft.Media/mediaservices':
        return `${dir}Azure Media Services _COLOR.png`;
      default:
        return `${dir}Unidentified feature object_COLOR.png`;
    }
  }
}
