var express = require("express");
var router = express.Router();
var mongoose = require('mongoose');
const customerModel = require("../models/customer.model");

/* GET all customers */
// router.get("/", function (req, res, next) {
//   res.render("index", { title: "Express" });
// });

/* create new customer */
router.post("/add", function (req, res, next) {
  let customerObj = new customerModel({
    customerId: 'req.customerId',
    firstName: 'req.firstName',
    lastName: 'req.lastName',
    emailAddr: 'req.emailAddr',
    phoneNumber: 'req.phoneNumber',
    age: 21,
    dob: 'req.dob',
    department: 'req.department',
  })

  customerObj.save(function(err, customerObj){
    if(err){
      res.send({status: 500, message: 'Unable to save'});
    }
    else {
      res.send({status: 200, message: 'Added new user', customerDetails: customerObj});
    }
  })
  // res.render("index", { title: "Express" });
});

/* update new customer */
router.put("/update", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* delete new customer */
router.delete("/delete", function (req, res, next) {
  res.render("index", { title: "Express" });
});

/* search new customer */
router.get("/search", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
