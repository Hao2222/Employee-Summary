const Employee = require("./Employee"); 
class Intern extends Employee {
    constructor (name, role, id, email, school){
        super (name, role, id, email);
        this.school = school;
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
       getSchool(){
        return `email: ${this.school}`
      }


// printInfo(){
//     console.log(`name: ${this.name}`);
//     console.log(`role: ${this.role}`);
//     console.log(`id: ${this.id}`);
//     console.log(`email: ${this.email}`);
//     console.log(`school: ${this.school}`);
// }
}

// return fs.writeFileAsync("./lib/main.html", answer.First_name);

// const intern = new Intern ('Steve', 'Intern', 123, 'steve@gmail.com', 'UCR');
  
// intern.printInfo();
module.exports = Intern;


// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
