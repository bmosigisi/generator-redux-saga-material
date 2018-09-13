'use strict';
const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');
const ncp = require('ncp').ncp;
const fs = require('fs');

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
        // First, check if the current directory is empty.
        fs.readdir(this.destinationRoot(), (err, files) => {
          if (err) {
            this.log('Could not read current directory');
            reject();
          } else if (files.length) {
            this.log('Sorry, this directory is not empty');
            reject();
          } else {
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
        })
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
