const authentication = require('./authentication');
const newProductTrigger = require('./triggers/new_product.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  triggers: { [newProductTrigger.key]: newProductTrigger },
};
