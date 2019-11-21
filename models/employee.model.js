const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let employeeSchema = new Schema({
  employeeId: Number,
  employeeName: String,
  employeeDepartment: String,
  employeeSalary: Number
});

module.exports = mongoose.model("Employee", employeeSchema);
