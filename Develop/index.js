const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs =require('fs/promises');
const path = require('path')
// Goal: generate Readme file for future projects. 

// Questions to ask: 
    //Project title 
    inquirer.prompt([ 
        //Title 
        {
            type: 'input',
            message: "What is your the project title?",
            name: 'title',
        },
        {
            type: 'list',
            message: "What is the license?",
            name: 'license',
            choices: [
                'MIT', 'GPL-v2', 'Apache-2.0', 'No license',
            ]
        },
        //Description
        {
            type: 'input',
            message: "What is the description?",
            name: 'description',
        },
        //Table of Contents 
        {
            type: 'input',
            message: "What are the steps required to install your project?",
            name: 'installation',
        },
        {
            type: 'input',
            message: "Give instruction and example of usage?",
            name: 'usage',
        },
        {
            type: 'input',
            message: "The names of people that helped you on your project?",
            name: 'contributing',
        },
        {
            type: 'input',
            message: "Any testing commands?",
            name: 'test',
        },
        //Questions
        {
            type: 'input',
            message: "What is your Github username?",
            name: 'github',
        },
        {
            type: 'email',
            message: "What is you email for future contact?",
            name: 'email',
        },
    ]).then((ans) =>{
        console.log('File "README.md" created!')
        const markdown = generateMarkdown(ans);
    //generate readme file based on responses 
    fs.writeFile('README.md', markdown, (err) => {
        if(err){
            throw err;
        };
    })
})
