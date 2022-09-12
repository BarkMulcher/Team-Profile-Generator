const generateHTML = require('./src/generateHTML');

const fs = require('fs');
const inquirer = require('inquirer');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { off } = require('process');


// resulting array
const teamResult = [];

// manager prompts: 
const addManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: `What is the team manager's name?`,
            when(answers) {
                return answers.roleType === 'Manager';
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
                return answers.roleType === 'Manager';
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
                return answers.roleType === 'Manager';
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
                return answers.roleType === 'Manager';
            },
        },
    ])

    .then(managerData => {
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager(name, id, email, officeNumber);

        teamResult.push(manager);

    })
}
// new Employee prompts:
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: `What type of employee are you adding?`,
            choices: ['Engineer', 'Intern']
        },
        {
            type: 'input',
            name: 'name',
            message: `What is the name of the engineer you'd like to add?`,
            when(answers) {
                return answers.roleType === 'Engineer';
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
                return answers.roleType === 'Engineer';
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
                return answers.roleType === 'Engineer';
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
                return answers.roleType === 'Engineer';
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
                return answers.roleType === 'Intern';
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
                return answers.roleType === 'Intern';
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
                return answers.roleType === 'Intern';
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
            message: `Please enter the school your intern is attending.`,
            when(answers) {
                return answers.roleType === 'Intern';
            },
            validate: function (answer) {
                if (!answer.length) {
                    return (`You must enter the school the "intern" is attending.`)
                }
                return true;
            }
        },
        {
            type: 'confirm',
            name: 'askAddMore',
            message: 'Do you need to add more employees?'
        }
    ])

        .then(employeeData => {
            let { name, id, email, role, github, school, askAddMore } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);
                console.log(employee);
            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);
                console.log(employee);
            }

            teamResult.push(employee);

            if (askAddMore) {
                return addEmployee(teamResult);
            } else {
                return teamResult
            }
        })
}

// function to write site:
writeToFile = (data) => {
    fs.writeFile(`./dist/team.html`, data, (err) => {

        if (err) {
            console.log(err);
            return;
        } else
            console.log('Success');
    })
}

const init = () => {
    addManager()
    .then(addEmployee())
   
        .then((teamResult) => {
            return generateHTML(teamResult);
        })
        .then((data) => {
            return writeToFile(data);
        })
        .catch((err) => {
            console.log(err);
        })
}

init();