const sql = require("./db.js");

// constructor
const Payroll = function(payroll) {
  this.code = payroll.CODE;
  this.nettotal = payroll.NETTOTAL;
  this.year = payroll.YEAR;
};



Payroll.findById = (payrollID, result) => {
  sql.query(`SELECT * FROM bpayroll WHERE chkid = '${payrollID}'`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }

    if (res.length) {
      console.log("found code: ", res[0]);
      result(null, res[0]);
      return;
    }

    // not found Customer with the id
    result({ kind: "not_found" }, null);
  });
};

Payroll.getAll = result => {
  sql.query("SELECT * FROM bpayroll limit 10", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("customers: ", res);
    result(null, res);
  });
};




module.exports = Payroll;
