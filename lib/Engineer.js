const Employee = require("./Employee"); 

class Engineer extends Employee{
    constructor (name, role, id, email, github){
        super (name, role, id, email);
        this.github = github;
    }

       getName(){
        return `name: ${this.name}`
       }
       getRole(){
         return `role: ${this.role}`
       }
       getId(){
         return `id: ${this.id}`
       }
       getEmail(){
         return `email: ${this.email}`
       }
       getGithub(){
        return `email: ${this.github}`
      }

    // printInfo(){
    //     console.log(`name: ${this.name}`);
    //     console.log(`role: ${this.role}`);
    //     console.log(`id: ${this.id}`);
    //     console.log(`email: ${this.email}`);
    //     console.log(`github: ${this.github}`);
    // }
  }
  
//   const engineer = new Engineer ('Steve', 'Engineer', 123, 'steve@gmail.com', 'Stevehub');
  
//   engineer.printInfo();

    module.exports = Engineer;

// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
