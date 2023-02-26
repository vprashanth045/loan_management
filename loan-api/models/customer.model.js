const mongoose = require('mongoose');

const customerSchema = mongoose.Schema({
    customerId: String,
    firstName: String,
    lastName: String,
    emailAddr: String,
    phoneNumber: String,
    age: Number,
    dob: String,
    department: String
})

const customerModel = mongoose.model('Customers', customerSchema);

module.exports = customerModel;