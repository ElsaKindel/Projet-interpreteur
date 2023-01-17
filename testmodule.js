import inquirer from 'inquirer';
const inquirer = require('inquirer');

inquirer
  .prompt([
    /* Pass your questions in here */
  ])
  .then((answers) => {
    // Use user feedback for... whatever!!
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
  
  /*class Color{
    constructor(name, code){
        this.name=name;
        this.code=code;
    }
}

const allColors = [
    new Color("brightred", "#E74C3C"),
];

exports.getrandomColor = () => {
    return allColors[0];
}

exports.allColors=allColors;*/

