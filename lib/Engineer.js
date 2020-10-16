const Employee = require("./Employee"); 

class Engineer extends Employee{
    constructor (name, position, id, email, github){
        super (name, position, id, email);
        this.github = github;
    }
    printInfo(){
        console.log(`name: ${this.name}`);
        console.log(`position: ${this.position}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);
        console.log(`github: ${this.github}`);
    }
  }
  
  const engineer = new Engineer ('Steve', 'Engineer', 123, 'steve@gmail.com', 'Stevehub');
  
  engineer.printInfo();

// module.exports = engineer;

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
