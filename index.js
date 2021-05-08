const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('.assets/generateMarkdown');

inquirer.prompt([
    {
        type:'input',
        name:'description',
        message:'What is title of your project?'
    },

    {
        type:'input',
        name:'description',
        message:'What is your email address?'
    },

    {
        type:'input',
        name:'description',
        message:'Please write short description of your prodject.'
    },

    {
        type:'input',
        name:'description',
        message:'What license did you use?'
    },

    {
        type:'input',
        name:'description',
        message:'What is your Github username?'
    },

    {
        type:'input',
        name:'description',
        message:'How would user use this application?'
    },
]);
