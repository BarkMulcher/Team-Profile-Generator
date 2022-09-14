

const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { off } = require('process');
const path = require('path');

const generateTeamHTML = require('./src/generateHTML');
// resulting array
const teamResult = [];


// manager prompts: 
const addEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: `What type of employee are you adding?`,
            choices: ['Manager', 'Engineer', 'Intern', `I am finished.`]
        },
        {
            type: 'input',
            name: 'name',
            message: `What is the team manager's name?`,
            when(answers) {
                return answers.role === 'Manager';
            },
            validate: function (answer) {
                if (!answer.length) {
                    return ("You must enter a manager name.")
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the team manager's ID?`,
            when(answers) {
                return answers.role === 'Manager';
            },
            validate: function (answer) {
                if (!answer.length) {
                    return (`You must enter manager's ID.`)
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the team manager's email?`,
            when(answers) {
                return answers.role === 'Manager';
            },
            validate: function (answer) {
                if (!answer.length) {
                    return (`You must enter manager's ID.`)
                }
                return true;
            }
        },
        {
            type: 'list',
            name: 'officeNumber',
            message: `What is the team manager's office number?`,
            choices: [1, 2, 3],
            when(answers) {
                return answers.role === 'Manager';
            },
        },
        {
            type: 'input',
            name: 'name',
            message: `What is the name of the engineer you'd like to add?`,
            when(answers) {
                return answers.role === 'Engineer';
            },
            validate: function (answer) {
                if (!answer.length) {
                    return (`You must enter an engineer's name.`)
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `What is your engineer's ID?`,
            when(answers) {
                return answers.role === 'Engineer';
            },
            validate: function (answer) {
                if (!answer.length) {
                    return (`You must enter engineer ID.`)
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the engineer's email address?`,
            when(answers) {
                return answers.role === 'Engineer';
            },
            validate: function (answer) {
                if (!answer.length) {
                    return (`You must enter engineer email address.`)
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'github',
            message: `What is the engineer's GitHub URL?`,
            when(answers) {
                return answers.role === 'Engineer';
            },
            validate: function (answer) {
                if (!answer.length) {
                    return (`You must enter engineer GitHub URL.`)
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'name',
            message: `What is the name of the "intern" you'd like to add?`,
            when(answers) {
                return answers.role === 'Intern';
            },
            validate: function (answer) {
                if (!answer.length) {
                    return (`You must enter the name of the "intern".`)
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the "intern" ID?`,
            when(answers) {
                return answers.role === 'Intern';
            },
            validate: function (answer) {
                if (!answer.length) {
                    return (`You must enter the ID of the "intern".`)
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'email',
            message: `What is your intern's email address?`,
            when(answers) {
                return answers.role === 'Intern';
            },
            validate: function (answer) {
                if (!answer.length) {
                    return (`You must enter an email for the "intern".`)
                }
                return true;
            }
        },
        {
            type: 'input',
            name: 'school',
            message: `Please enter the school your "intern" is attending.`,
            when(answers) {
                return answers.role === 'Intern';
            },
            validate: function (answer) {
                if (!answer.length) {
                    return (`You must enter the school the "intern" is attending.`)
                }
                return true;
            }
        },
    ]).then(employeeData => {
        const { role, name, id, email, github, school, officeNumber } = employeeData;
        let manager;
        let engineer;
        let intern;

        if (role === "Manager") {
            manager = new Manager(name, id, email, officeNumber)
            console.log(manager);

            teamResult.push(manager);
            addEmployee();

        } else if (role === "Engineer") {
            engineer = new Engineer(name, id, email, github);
            console.log(engineer);

            teamResult.push(engineer);
            addEmployee();

        } else if (role === "Intern") {
            intern = new Intern(name, id, email, school);
            console.log(intern);

            teamResult.push(intern);
            addEmployee();

        } else if (role === `I am finished.`) {
            writeToFile('./dist/team1.html', generateTeamHTML(teamResult));
        }
    })

}

const writeToFile = (fileName, data) => {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.log(err);
            return; 
        } else {
            console.log('success!');
        }
    }
    );
};

const init = () => {
    addEmployee()
        // .then(teamResult => {
        //     return generateTeamHTML(teamResult);
        // })
        // .then((results) => {
        //     return writeToFile(results);
        // })
        // .catch((err) => {
        //     console.log(err);
        // })
    }

init();