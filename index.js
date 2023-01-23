// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const path = require("path");


// TODO: Create an array of questions for user input
// 

const questions = [
        {
            type: 'input',
            name: 'title',
            message: "What's your project title",
            validate: (answer) => {
                if (answer !== '') {
                  return true;
                }
                return 'Please enter at least one character.';
              },
        },
        {
            type: 'input',
            name: 'author',
            message: "What's the authors name?",
            validate: (answer) => {
                if (answer !== '') {
                  return true;
                }
                return 'Please enter at least one character.';
              },
        },
        {
            type: 'input',
            name: 'username',
            message: "What's your GitHub username?",
            validate: (answer) => {
                if (answer !== '') {
                  return true;
                }
                return 'Please enter at least one character.';
              },
        },
        {
            type: 'input',
            name: 'email',
            message: "What's your email address?",
            validate: (answer) => {
                if (answer !== '') {
                  return true;
                }
                return 'Please enter at least one character.';
              },
        },
        {
            type: 'input',
            name: 'description',
            message: "Provide a short description explaining the what, why, and how of your project.",
            validate: (answer) => {
                if (answer !== '') {
                  return true;
                }
                return 'Please enter at least one character.';
              },
        },
        {
            type: 'input',
            name: 'installation',
            message: "How do you install this application?",
            validate: (answer) => {
                if (answer !== '') {
                  return true;
                }
                return 'Please enter at least one character.';
              },
        },
        {
            type: 'input',
            name: 'usage',
            message: 'How do you use this application?',
            validate: (answer) => {
                if (answer !== '') {
                  return true;
                }
                return 'Please enter at least one character.';
              },
        },
        {
            type: 'input',
            name: 'testing',
            message: 'How do you test this application?',
            validate: (answer) => {
                if (answer !== '') {
                  return true;
                }
                return 'Please enter at least one character.';
              },
        },

        {
            type: 'input',
            name: 'contributing',
            message: 'How can someone contribute to this application?',
            validate: (answer) => {
                if (answer !== '') {
                  return true;
                }
                return 'Please enter at least one character.';
              },
        },
        {
            type: 'list',
            name: 'license',
            message: "What license did you use?",
            choices: ["None", "Apache License 2.0", "GNU General Public License v3.0", "MIT License", "BSD 2-Clause Simplified License",
                "BSD 3-Clause New or Revised License", "Boost Software License 1.0", "Creative Commons Zero v1.0 Universal",
                "Eclipse Public License 2.0", "GNU Affero General PUblic License v3.0", "GNU General Public License v2.0", "GNU Lesser General Public License v2.1"],
                validate: (answer) => {
                    if (answer !== '') {
                      return true;
                    }
                    return 'Please enter at least one character.';
                  },
        },
        {
            type: 'input',
            name: 'credit',
            message: 'List the people who contributed to your project directly or indirectly',
            validate: (answer) => {
                if (answer !== '') {
                  return true;
                }
                return 'Please enter at least one character.';
              },
        },
    ];



// function validate(response) {
//    return response.length < 1 ? 'You must answer the question or write N/A': 'true';
// };

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(),"/dist",fileName), data)   
 };

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((response) => {
        console.log(response)
        writeToFile("README.md", generateMarkdown(response));        
    });
};
// Function call to initialize app
init();
