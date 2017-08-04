import TemplateParser from '../../app/parsers/templateParser';

describe('parsers', () => {
  describe('templateParser', () => {
    it('should handle template with blank fields', () => {
      const json = { $schema: 'some_schema', contentVersion: '1.0.0.0', resources: [] };
      const tp = new TemplateParser(json);

      const result = tp.parseTemplate();

      expect(result.schema).toBe('some_schema');
      expect(result.contentVersion).toBe('1.0.0.0');
    });

    it('should handle variable in resource name', () => {
      const json = { $schema: 'some_schema', contentVersion: '1.0.0.0', resources: [{ name: '[variables(\'virtualMachineName\')]' }], variables: { virtualMachineName: 'VM-MultiNic' } };
      const tp = new TemplateParser(json);

      const result = tp.parseTemplate();
      TemplateParser.normalizeNames(result);

      expect(result.schema).toBe('some_schema');
      expect(result.contentVersion).toBe('1.0.0.0');
      expect(result.resources[0].displayName).toBe('VM-MultiNic');
    });

    it('should handle variables in dependsOn resources name', () => {
      const json = {
        $schema: 'some_schema',
        contentVersion: '1.0.0.0',
        resources: [
          {
            name: '[variables(\'virtualMachineName\')]',
            dependsOn: [
              '[variables(\'nic1\')]',
              '[variables(\'nic2\')]',
              '[variables(\'diagStorageAccountName\')]'
            ]
          }
        ],
        variables: {
          nic1: 'nic-1',
          nic2: 'nic-2',
          diagStorageAccountName: '[concat(\'diags\',\'some_unique_string\')]'
        }
      };
      const tp = new TemplateParser(json);

      const result = tp.parseTemplate();
      TemplateParser.normalizeNames(result);

      expect(result.schema).toBe('some_schema');
      expect(result.contentVersion).toBe('1.0.0.0');
      expect(result.resources[0].dependsOn[0].name).toBe('nic-1');
      expect(result.resources[0].dependsOn[1].name).toBe('nic-2');
      expect(result.resources[0].dependsOn[2].name).toBe('diagssome_unique_string');
    });

    it('should handle resourceId in resource name', () => {
      const json = {
        $schema: 'some_schema',
        contentVersion: '1.0.0.0',
        resources: [
          {
            name: '[variables(\'virtualMachineName\')]',
            dependsOn: [
              '[resourceId(\'Microsoft.Web/sites\', variables(\'webappName\'))]'
            ]
          }
        ],
        parameters: {
          'ifttt-prefix': {
            type: 'string'
          }
        },
        variables: {
          webAppName: '[concat(parameters(\'ifttt-prefix\'), \'-webapp-api\')]'
        }
      };
      const tp = new TemplateParser(json);

      const result = tp.parseTemplate();
      TemplateParser.normalizeNames(result);

      expect(result.schema).toBe('some_schema');
      expect(result.contentVersion).toBe('1.0.0.0');
      expect(result.resources[0].dependsOn[0].name).toBe('Microsoft.Web/sitesifttt-prefix-webapp-api');
    });

    it('should connect resource and dependency', () => {
      const json = {
        $schema: 'some_schema',
        contentVersion: '1.0.0.0',
        resources: [
          {
            name: '[variables(\'functionAppName\')]',
            dependsOn: [
              '[resourceId(\'Microsoft.Web/serverfarms\', parameters(\'liczniknetFunctionAppServicePlanName\'))]'
            ]
          },
          {
            name: '[parameters(\'liczniknetFunctionAppServicePlanName\')]'
          }
        ],
        parameters: {
          liczniknetReleaseType: {
            type: 'string'
          },
          liczniknetFunctionAppName: {
            type: 'string'
          },
          liczniknetFunctionAppServicePlanName: {
            type: 'string'
          }
        },
        variables: {
          webAppName: '[concat(parameters(\'liczniknetFunctionAppName\'), \'-\', parameters(\'liczniknetReleaseType\'))]'
        }
      };
      const tp = new TemplateParser(json);

      const result = tp.parseTemplate();
      TemplateParser.normalizeNames(result);

      expect(result.schema).toBe('some_schema');
      expect(result.contentVersion).toBe('1.0.0.0');
      expect(result.resources[0].dependsOn[0].name).toBe('Microsoft.Web/serverfarmsliczniknetFunctionAppServicePlanName');
      expect(result.resources[1].displayName).toBe('liczniknetFunctionAppServicePlanName');
    });
  });
});
