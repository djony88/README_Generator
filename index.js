// node modules
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./assets/generateMarkdown');

// Generate questions
inquirer.prompt([
    {
        type:'input',
        name:'title',
        message:'What is title of your project?'
    },

    {
        type:'input',
        name:'questions',
        message:'What is your email address?'
    },

    {
        type:'input',
        name:'description',
        message:'Please write short description of your prodject.'
    },

    {
        type:'input',
        name:'license',
        message:'What license did you use?',
        choices:['MIT', 'Apache', 'GNU', 'ISC', 'N/A'],
    },

    {
        type:'input',
        name:'questions',
        message:'What is your Github username?'
    },

    {
        type:'input',
        name:'usage',
        message:'How would user use this application?'
    },

    {
        type:'input',
        name:'installation',
        message:'How to install this app?'
    },
]).then((response) => {
    console.log(response);
    fs.writeFile('UserREADME.md', generateMarkdown(response), (err) => err ? console.log(err): console.log('Succses'));
})

