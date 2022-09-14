// function to fill in manager info and base HTML
    const managerCard = manager => {
        return `
        <div class="card m-1 card-equal-height has-background-grey-light">
        <div class="column is-narrow">
            <header class="card-header">
                <div class="has-text-centered">
                    <figure class="image is-128x128">
                        <img class="is-rounded" src="../dist/images/kermit.jpg">
                    </figure>
                </div>
            </header>
            <h5 class="title is-4 has-text-centered">
                ${manager.name}
            </h5>
            <p class="pl-6 subtitle is-5 has-text-centered">
                Manager
            </p>
            <div class="card-content">
                <div class="box">
                    <p>
                        ID: ${manager.id}
                    </p>
                </div>
                <div class="box">
                    <p>
                        Email: <br>
                        <a href="mailto:${manager.email}">${manager.email}</a>
                    </p>
                </div>
                <div class="box">
                    <p>
                        Office #: ${manager.officeNumber}
                    </p>
                </div>
            </div>
        </div>
    </div>
    `;

    }

// function to fill in engineer info and base HTML
    const engineerCard = engineer => {
        return `
    <div class="card m-1 card-equal-height has-background-grey-light">
        <div class="column is-narrow">
            <header class="card-header">
                <div class="has-text-centered">
                    <figure class="image is-128x128">
                        <img class="is-rounded" src="./dist/images/cowboy.jpg">
                    </figure>
                </div>
            </header>
            <h5 class="title is-4 has-text-centered">
                ${engineer.name}
            </h5>
            <p class="pl-6 subtitle is-5 has-text-centered">
                Engineer
            </p>
            <div class="card-content">
                <div class="box">
                    <p>
                        ID: ${engineer.id}
                    </p>
                </div>
            </div>
            <div class="box">
                <p>Email: <br>
                    <a href="mailto:${engineer.email}">${engineer.email}</a>
                </p>
            </div>
            <div class="box">
                <p>
                    Github: <br>
                    <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a>
                </p>
            </div>
        </div>
    </div>
    `;

    }

// function to fill in "intern" info and base HTML
    const internCard = intern => {
        return `
    <div class="card m-1 card-equal-height has-background-grey-light">
        <div class="column is-narrow">
            <header class="card-header">
                <div class="has-text-centered">
                    <figure class="image is-128x128">
                        <img class="is-rounded" src="../dist/images/steve.jpg">
                    </figure>
                    </div>
            </header>
            <h5 class="title is-4 has-text-centered">
                "${intern.name}"
            </h5>
            <p class="pl-6 subtitle is-5 has-text-centered">
                "Intern"
            </p>
            <div class="card-content">
                <div class="box">
                    <p>
                        ID: ${intern.id}
                    </p>
                </div>
                <div class="box">
                    <p>
                    Email: <br>
                    <a href="mailto:${intern.email}">${intern.email}</a>
                </div>
                <div class="box">
                    <p>
                    Institution: <br>
                    ${intern.school}
                    </p>
                </div>
            </div>
        </div>
    </div>
    `;

    }

// function to filter inputs by role
const generateTeamHTML = teamResult => {
    let employeeHTML = [];

    for (let i = 0; teamResult.length>i; i++){ 
        const role = teamResult[i].getRole();


        if (role === 'Manager'){ 
            employeeHTML.push(managerCard(teamResult[i]));
        }
        if (role === 'Engineer'){ 
            employeeHTML.push(engineerCard(teamResult[i]));
        }
        if (role === 'Intern'){ 
            employeeHTML.push(internCard(teamResult[i]));
        }
    }
    const  mergedTeam = employeeHTML.join(''); 
    return generateTeamPage(mergedTeam); 

 
    };



// function to define page HTML
const generateTeamPage = mergedTeam => {
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
                ${mergedTeam}

    </div>
    </section>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.1/jquery.min.js" integrity="sha512-aVKKRRi/Q/YV+4mjoKBsE4x3H+BkegoM/em46NNlCqNTmUYADjBbeNefNxYV7giUp0VxICtqdrbqU7iVaeZNXA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    </body>
    </html>`;
}



module.exports = generateTeamHTML;
