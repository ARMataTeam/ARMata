const fs = require('fs');
const glob = require('glob');

let output = [];

glob('azure-quickstart-templates/**/metadata.json', (error, files) => {
  let simpleCounter = 0;
  let outputCounter = 1;
  files.forEach((filename) => {
    if (filename.indexOf('301-multi-vmss-linux-lb-zones') < 1) {
      try {
        const content = JSON.parse(fs.readFileSync(filename, 'utf8'));
        content.deployPath = filename.replace('metadata.json', 'azuredeploy.json');
        output.push({ itemDisplayName: content.itemDisplayName, deployPath: content.deployPath });
        simpleCounter += 1;
        if (simpleCounter % 10 === 0) {
          fs.writeFileSync(`app/template/output_${outputCounter}.json`, JSON.stringify(output));
          outputCounter += 1;
          output = [];
        }
      } catch (e) {
        console.log(e);
      }
    }
  });
  if (output.length > 0) {
    fs.writeFileSync(`app/template/output_${outputCounter}.json`, JSON.stringify(output));
  }
});
