class Employee{
    constructor (name, role, id, email){
        this.name = name;
        this.role = role;
        this.id = id;
        this.email = email;
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
//   printInfo(){
//     console.log(`name: ${this.name}`);
//     console.log(`role: ${this.role}`);
//     console.log(`id: ${this.id}`);
//     console.log(`email: ${this.email}`);
// }

}

 
// const employee = new Employee ('Steve', 'Engineer', 123, 'steve@gmail.com');

// employee.printInfo();

module.exports = Employee;

// TODO: Write code to define and export the Employee class
