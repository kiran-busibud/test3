const new_email = require('./actions/new_email');
const authentication = require('./authentication');
const newProductTrigger = require('./triggers/new_product.js');
// const newEmailAction = require('./actions/new_email.js')
const issueCreate = require('./creates/issue.js');

module.exports = {
  version: require('./package.json').version,
  platformVersion: require('zapier-platform-core').version,
  authentication: authentication,
  triggers: { [newProductTrigger.key]: newProductTrigger },
  // actions: {[newEmailAction.key]: newEmailAction},

  creates: {
    [issueCreate.key]: issueCreate,
  },
};
