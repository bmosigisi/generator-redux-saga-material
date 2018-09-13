'use strict';
const Generator = require('yeoman-generator');
const humps = require('humps');
const path = require('path');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('name', { type: String, required: false });
    this.componentName = this._capitalize(
      humps.camelize(this.options.name)
    );
  }

  writing() {
    const destination = path.join(
      this.destinationRoot(),
      'src',
      'components',
      `${this.componentName}.js`
    );
    this.fs.copyTpl(
      this.templatePath('component.js'),
      this.destinationPath(destination),
      { componentName: this.componentName }
    );
  }

  // Helpers
  _capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
};
