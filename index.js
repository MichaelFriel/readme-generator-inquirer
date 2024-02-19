const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

console.log("Hello World!")
// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'Email',
        message: 'What is your email address?'
    },

    {
        type: 'input',
        name: 'Project',
        message: 'What is your project called?'
    },

    {
        type: 'input',
        name: 'Description',
        message: 'Can you provide a brief description?'
    },

    {
        name: 'license',
        type: 'list',
        message: 'What kind of license would you like to use?',
        choices: [
            'Mit',
            'Apache 2.0',
            'Boost Software 1.0',
            'BSD 3-Clause'
        ],
    },

    {
        type: 'input',
        name: 'Dependencies',
        message: 'What command should be run in order to install dependencies?'
    },

    {
        type: 'list',
        name: 'Tests',
        message: 'Is there a command available to run tests?',
        choices: [
            'Yes - npm test',
            'No - currently no tests available',
        ],
    },

    {
        type: 'input',
        name: 'Repo',
        message: 'Is there anything the user needs to know about using the repo?'
    },


    {
        type: 'input',
        name: 'Contribution',
        message: 'Is there anything the user needs to know about contributing to the repo?'
    },

];



console.log("This is a console test for", process.argv[3])

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
  err ? console.error(err) : console.log('Success!')
);

}

// function to initialize program
function init() {

    inquirer.prompt(questions)
    .then(answers => {
        console.log(answers);
        writeToFile('projectreadme.md', generateMarkdown(answers))
    });

}

// function call to initialize program
init();
