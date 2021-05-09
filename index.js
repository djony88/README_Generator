// node modules
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('.assets/generateMarkdown');

// Generate questions
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
        message:'What license did you use?',
        choices:['MIT', 'Apache', 'GNU', 'ISC', 'N/A'],
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
]).then((response) => {
    console.log(response);
    fs.writeFile('UserREADME.md', generateMarkdown(response), (err) => err ? console.log(err): console.log('Succses'));
})

