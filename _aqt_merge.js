const fs = require('fs');
const glob = require('glob');

const output = [];

glob('azure-quickstart-templates/**/metadata.json', (error, files) => {
  files.forEach((filename) => {
    if (filename.indexOf('301-multi-vmss-linux-lb-zones') < 1) {
      try {
        const content = JSON.parse(fs.readFileSync(filename, 'utf8'));
        content.deployPath = filename.replace('metadata.json', 'azuredeploy.json');
        output.push(content);
      } catch (e) {
        console.log(e);
      }
    }
  });
  fs.writeFileSync('app/template/output.json', JSON.stringify(output));
});
