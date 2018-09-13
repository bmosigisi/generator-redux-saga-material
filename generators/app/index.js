'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const ncp = require('ncp').ncp;

module.exports = class extends Generator {
  prompting() {
    this.log(
      yosay(
        `Welcome to the smashing ${chalk.red('react redux redux-saga material-ui')} generator!`
      )
    );
  }

  async writing() {
    return new Promise(
      (resolve, reject) => {
        ncp(
          this.templatePath(),
          this.destinationPath(),
          (err) => {
            if (err) {
              this.log(err);
              reject();
            }
            resolve();
          }
        );
      }
    );
  }

  install() {
    this.installDependencies({
      yarn: {force: true},
      npm: false,
      bower: false,
    });
  }
};
