const connection = require('./connection')

class DB {
  constructor(connection) {
  this.connection = connection
  }

  findAllEmployees(){
    return this.connection.promise().query('SELECT * FROM employees')
  }

  findAllDepartments() {
    return this.connection.promise().query('SELECT * FROM departments')
  }

  findAllRoles() {
    return this.connection.promise().query('SELECT * FROM roles')
  }
  
  createEmployee(employee){
    return this.connection.promise().query('INSERT INTO employees SET ?', employee)
  }

  createRole(role){
    return this.connection.promise().query('INSERT INTO roles SET ?', role)
  }

  createDepartment(department){
    return this.connection.promise().query('INSERT INTO department SET ?', department)
  }

  updateEmployeeRole(employee_id, role_id){
    return this.connection.promise().query('UPDATE employees SET role_id = ? WHERE id = ?', [role_id, employee_id])
  }

  updateManager(employee_id, manager_id){
    return this.connection.promise().query('UPDATE employees SET manager_id = ? WHERE id = ?', [manager_id, employee_id])
  }
}


module.exports = new DB(connection)