const Employee = require("./Employee"); 

class Manager extends Employee{
    constructor (name, role, id, email, officenumber){
        super (name, role, id, email);
        this.officenumber = officenumber;
    }

    getName(){
      return `name: ${this.name}`;
     }
     getRole(){
       return `role: ${this.role}`;
     }
     getId(){
       return `id: ${this.id}`;
     }
     getEmail(){
       return `email: ${this.email}`;
     }
     getOfficeNumber(){
      return `email: ${this.officenumber}`;
    }
    // printInfo(){
    //     console.log(getName());
    //     console.log(getRole());
    //     console.log(getId());
    //     console.log(getEmail());
    //     console.log(getOfficeNumber());
    // }
  }

  module.exports = Manager;
  
  // const manager = new Manager ('Steve', 'Manager', 123, 'steve@gmail.com', '456');
  
  // manager.printInfo();

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
