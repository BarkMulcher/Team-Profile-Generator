// create manager card
const generateManager = (data) => {
    return `
    <div class="card m-1 card-equal-height has-background-grey-light">
    <div class="column is-narrow">
        <header class="card-header">
            <div class="has-text-centered">
                <figure class="image is-128x128">
                    <img class="is-rounded" src="./images/kermit.jpg">
                </figure>
            </div>
        </header>
        <h5 class="title is-4 has-text-centered">
            ${data.mgrName}
        </h5>
        <p class="pl-6 subtitle is-5 has-text-centered">
            Manager
        </p>
        <div class="card-content">
            <div class="box">
                <p>
                    ID: ${data.mgrId}
                </p>
            </div>
            <div class="box">
                <p>
                    Email: <br>
                    <a href="mailto:${data.mgrEmail}">${data.mgrEmail}</a>
                </p>
            </div>
            <div class="box">
                <p>
                    Office #: ${data.mgrOfficeNumber}
                </p>
            </div>
        </div>
    </div>
</div>
`;
}

// create engineer card
const generateEngineer = (data) => {
    return `
    <div class="card m-1 card-equal-height has-background-grey-light">
        <div class="column is-narrow">
            <header class="card-header">
                <div class="has-text-centered">
                    <figure class="image is-128x128">
                        <img class="is-rounded" src="./images/cowboy.jpg">
                    </figure>
                </div>
            </header>
            <h5 class="title is-4 has-text-centered">
                ${data.engineer.name}
            </h5>
            <p class="pl-6 subtitle is-5 has-text-centered">
                Engineer
            </p>
            <div class="card-content">
                <div class="box">
                    <p>
                        ID: ${data.engineer.id}
                    </p>
                </div>
            </div>
            <div class="box">
                <p>Email: <br>
                    <a href="mailto:${data.engineer.email}">${data.engineer.email}</a>
                </p>
            </div>
            <div class="box">
                <p>
                    Github: ${data.engineer.github}
                </p>
            </div>
        </div>
    </div>
    `
}

// create intern card
const generateIntern = (data) => {
    return `
    <div class="card m-1 card-equal-height has-background-grey-light">
        <div class="column is-narrow">
            <header class="card-header">
                <div class="has-text-centered">
                    <figure class="image is-128x128">
                        <img class="is-rounded" src="./images/steve.jpg">
                    </figure>
                    </div>
            </header>
            <h5 class="title is-4 has-text-centered">
                "${data.intern.name}"
            </h5>
            <p class="pl-6 subtitle is-5 has-text-centered">
                Intern
            </p>
            <div class="card-content">
                <div class="box">
                    <p>
                        ID: ${data.intern.id}
                    </p>
                </div>
                <div class="box">
                    <p>
                    Email: <br>
                    <a href="mailto:${data.intern.email}">${data.intern.email}</a>
                </div>
                <div class="box">
                    <p>
                    Institution: <br>
                    ${data.intern.school}
                    </p>
                </div>
            </div>
        </div>
    </div>
    `;
}

const generateHTML = (data) => {

    employeeArray = [];

    for (i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

    if (role === 'Manager') {
        const managerCard = generateManager(employee);

        employeeArray.push(managerCard);
    }

    if (role === 'Engineer') {
        const engineerCard = generateEngineer(employee);

        employeeArray.push(engineerCard);
    }

    if (role === 'Intern') {
        const internCard = generateIntern(employee);

        employeeArray.push(internCard);
    }
    };

    const employeeInfo = employeeArray.join('');

    const createTeam = generateTeamHTML(employeeInfo);
    return createTeam;
}

const generateTeamHTML = (employeeInfo) => {
    return `
    <!DOCTYPE html>
    <html>
    
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Team Profile</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css">
    </head>
    
    <body>
        <section class="section cards has-background-info">
            <div class="container">
                <div class="columns is-mobile is-multiline is-centered">
                <!-- My Team -->
                ${employeeInfo}

    </div>
    </section>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </body>
    </html>`;
}

module.exports = generateHTML;