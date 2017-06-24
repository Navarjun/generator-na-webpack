'use strict';
const Generator = require('yeoman-generator');
// const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
  // Prompting() {
  //   // Have Yeoman greet the user.
  //   this.log(yosay(
  //     'Welcome to the wondrous ' + chalk.red('generator-na-webpack') + ' generator!'
  //   ));
  //
  //   const prompts = [{
  //     type: 'confirm',
  //     name: 'someAnswer',
  //     message: 'Would you like to enable this option?',
  //     default: true
  //   }];
  //
  //   return this.prompt(prompts).then(props => {
  //     // To access props later use this.props.someAnswer;
  //     this.props = props;
  //   });
  // }
  //
  writing() {
    this.fs.copy(
      this.templatePath('*'),
      this.destinationPath('./')
    );
    this.fs.copy(
      this.templatePath('src/*'),
      this.destinationPath('./src/')
    );
    this.fs.copy(
      this.templatePath('src/styles/*'),
      this.destinationPath('./src/styles/')
    );
    this.fs.copy(
      this.templatePath('dist/*'),
      this.destinationPath('./dist/')
    );
  }

  Prompting() {
    this.log(yosay(
        'Please run "npm install" to install the dependencies'
    ));
  }
  //
  // install() {
  //   this.installDependencies();
  // }
};
