const Employee = require("../models/employee.model.js");

exports.addNewEmployee = (request, response) => {
  console.log(request.body);

  // First check if request.body contains book information
  if (!request.body.employeeId)
    response.status(400).send("Employee information should be complete.");
  else {
    let employee = new Employee({
      employeeId: request.body.employeeId,
      employeeName: request.body.employeeName,
      employeeDepartment: request.body.employeeDepartment,
      employeeSalary: request.body.employeeSalary
    });

    employee
      .save()
      .then(data => {
        response.status(200).send(data);
      })
      .catch(err => {
        console.log("Error");
        response.status(500).send("Failed to add employee.", err);
      });
  }
};

// exports.deleteBookById = (request, response) => {
//   let book_id = request.params.bookId;

//   Book.findOneAndDelete({ bookId: book_id })
//     .then(data => {
//       if (data == null) response.status(404).send("Book not found.");
//       else response.status(200).send("Book is deleted.");
//     })
//     .catch(err => {
//       response.status(500).send("Failed to delete a book", err);
//     });
// };

exports.findAllEmployees = (request, response) => {
  Employee.find()
    .then(data => {
      response.status(200).send(data);
    })
    .catch(err => {
      response.status(500).send("Failed to load employees", err);
    });
};
