class Employee{
    constructor (name, position, id, email){
        this.name = name;
        this.position = position;
        this.id = id;
        this.email = email;
  }
  printInfo(){
      console.log(`name: ${this.name}`);
      console.log(`position: ${this.position}`);
      console.log(`id: ${this.id}`);
      console.log(`email: ${this.email}`);
  }
}

const employee = new Employee ('Steve', 'Engineer', 123, 'steve@gmail.com');

employee.printInfo();

// module.exports = employee;
// TODO: Write code to define and export the Employee class
