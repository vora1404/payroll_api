
const Payroll = require("../models/payroll.model.js");



// Retrieve all Customers from the database.
exports.findAll = (req, res) => {
  Payroll.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving customers."
      });
    else res.send(data);
  });
};

// Find a single Customer with a customerId
exports.findOne = (req, res) => {
  Payroll.findById(req.params.payrollID, (err, data) => {
    if (err) {
      if (err.kind === "not_found") {
        res.status(404).send({
          message: `Not found Customer with id ${req.params.payrollID}.`
        });
      } else {
        res.status(500).send({
          message: "Error retrieving Customer with id " + req.params.payrollID
        });
      }
    } else res.send(data);
  });
};



