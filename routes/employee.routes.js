module.exports = app => {
  const employee = require("../controllers/employee.controller.js");

  // To add a new Employee
  app.post("/api/employee", employee.addNewEmployee);

  // To delete a employee by its Id
  //app.delete("/books/:bookId", book.deleteBookById);

  // To find all employees
  app.get("/api/employees", employee.findAllEmployees);
};
