module.exports = app => {
    const payroll = require("../controllers/payroll.controller.js");
  
    
    // Retrieve all Customers
    app.get("/payroll", payroll.findAll);
  
    // Retrieve a single Customer with customerId
    app.get("/payroll/:payrollID", payroll.findOne);
  
  
  };
  