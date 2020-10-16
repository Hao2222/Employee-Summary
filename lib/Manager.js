
class Manager extends Employee {
    constructor (name, position, id, email, officenumber){
        super (name, position, id, email);
        this.officenumber = officenumber;
    }

}
module.exports = manager;
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
