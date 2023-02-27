var express = require("express");
var router = express.Router();
var mongoose = require("mongoose");
const customerModel = require("../models/customer.model");

/* GET all customers */
router.get("/list", function (req, res, next) {
  customerModel.find(function (err, customerListResp) {
    if (err) {
      res.send({ status: 500, message: "Unable to fetch" });
    } else {
      const recordsCount = customerListResp.length;
      res.send({
        status: 200,
        recordCount: recordsCount,
        results: customerListResp,
      });
    }
  });
});

/* GET specific customer */
router.get("/view", function (req, res, next) {
  const userId = req.params.userId;
  customerModel.findById(userId, function (err, customerResp) {
    if (err) {
      res.send({ status: 500, message: "Unable to find the customer" });
    } else {
      res.send({
        status: 200,
        results: customerResp,
      });
    }
  });
});

/* create new customer */
router.post("/add", function (req, res, next) {
  let customerId = req.body.customerId;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let emailAddr = req.body.emailAddr;
  let phoneNumber = req.body.phoneNumber;
  let age = req.body.age;
  let dob = req.body.dob;
  let department = req.body.department;

  let customerObj = new customerModel({
    customerId: customerId,
    firstName: firstName,
    lastName: lastName,
    emailAddr: emailAddr,
    phoneNumber: phoneNumber,
    age: age,
    dob: dob,
    department: department,
  });

  // console.log(req);
  // console.log(req.params);

  customerObj.save(function (err, customerObj) {
    if (err) {
      res.send({ status: 500, message: "Unable to save" });
    } else {
      res.send({
        status: 200,
        message: "Added new user",
        customerDetails: customerObj,
      });
    }
  });
  // res.render("index", { title: "Express" });
});

/* update new customer */
router.put("/update", function (req, res, next) {
  const userId = req.body.userId;
  let customerId = req.body.customerId;
  let firstName = req.body.firstName;
  let lastName = req.body.lastName;
  let emailAddr = req.body.emailAddr;
  let phoneNumber = req.body.phoneNumber;
  let age = req.body.age;
  let dob = req.body.dob;
  let department = req.body.department;
  
  let customerObj = {
    customerId: customerId,
    firstName: firstName,
    lastName: lastName,
    emailAddr: emailAddr,
    phoneNumber: phoneNumber,
    age: age,
    dob: dob,
    department: department,
  };
  // console.log(userId, customerObj);
  customerModel.findByIdAndUpdate(
    userId,
    customerObj,
    function (err, customerResp) {
      if (err) {
        res.send({ status: 500, message: "Unable to update the customer" });
      } else {
        res.send({
          status: 200,
          results: customerObj,
        });
      }
    }
  );
});

/* delete one specific customer */
router.delete("/delete", function (req, res, next) {
  const userId = req.query.userId;
  customerModel.findByIdAndDelete(userId, function (err, customerResp) {
    if (err) {
      res.send({ status: 500, message: "Unable to delete the customer" });
    } else {
      res.send({
        status: 200,
        message: "Customer deleted!",
        results: customerResp,
      });
    }
  });
});

/* delete multiple customer */
router.delete("/delete-multiple", function (req, res, next) {
  // const userId = req.query.userId;
  const name = req.query.name;
  customerModel.deleteMany({ firstName: name }, function (err, customerResp) {
    if (err) {
      res.send({ status: 500, message: "Unable to delete the customers" });
    } else {
      res.send({
        status: 200,
        message: "Customers deleted!",
        results: customerResp,
      });
    }
  });
});

/* search new customer */
router.get("/search", function (req, res, next) {
  res.render("index", { title: "Express" });
});

module.exports = router;
