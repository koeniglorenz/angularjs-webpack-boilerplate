module.exports = directive;

var template = require('./home.template.html');

function directive() {
  return {
    templateUrl: template
  };
}
