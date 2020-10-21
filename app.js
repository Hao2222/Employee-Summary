const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
var http = require ('http');

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath1 = path.join(OUTPUT_DIR, "engineer.html");
const outputPath2 = path.join(OUTPUT_DIR, "intern.html");
const outputPath3 = path.join(OUTPUT_DIR, "manager.html");

const render = require("./lib/htmlRenderer");

function promptUser(){
    
return inquirer.prompt([{
        name: "First_name",
        type: "input",
        message: "What is your First name?" 
    },
    {
        name: "Role",
        type: "input",
        message: "What is your role?"
    },
    {
        name: "Identification",
        type: "input",
        message: "What is your ID?"
    },
    {
        name: "Email",
        type: "input",
        message: "What is your Email?"
    },
    {
        name: "Office_number",
        type: "input",
        message: "What is your office number?"
    },
    {
        name: "Github",
        type: "input",
        message: "What is your Github user name?"
    },
    {
        name: "School",
        type: "input",
        message: "What is the name of your your school?"
    }
])
}
   promptUser()
  .then(function(answers) {

    const manager = new Manager (`${answers.First_name}`,`${answers.Role}`,`${answers.Identification}`,`${answers.Email}`,`${answers.Office_number}`);
    const engineer = new Engineer (`${answers.First_name}`,`${answers.Role}`,`${answers.Identification}`,`${answers.Email}`,`${answers.Github}`);
    const intern = new Intern (`${answers.First_name}`,`${answers.Role}`,`${answers.Identification}`,`${answers.Email}`,`${answers.School}`);

    
    render([manager, engineer, intern]);


    

  })
  .then(function() {
    
    console.log('Rendered html success');
    
  })
  .catch(function(err) {
    console.log(err);
  }); 
   

    let handleRequest = (request, response) => {
        response.writeHead(200, {
            'Content-Type': 'text/html'
        });
        fs.readFile('./templates/main.html', null, function (error, data) {
            if (error) {
                response.writeHead(404);
                respone.write('Whoops! File not found!');
            } else {
                response.write(data);
            }
            response.end();
        });
    
    };

    http.createServer(handleRequest).listen(8080);    


//     promptUser()
//   .then(function(answers) {
//     const html = generateHTML(answers);

//     return writeFileAsync("index.html", html);
//   })
//   .then(function() {
//     console.log("Successfully wrote to index.html");
//   })
//   .catch(function(err) {
//     console.log(err);
//   });



  

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTMLEnginee
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! 