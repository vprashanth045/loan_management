const mongoose = require('mongoose');

const invoiceSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    emailAddr: String,
    phoneNumber: String,
    dob: String,
})

const invoiceModel = mongoose.model('Invoices', invoiceSchema);

module.exports = invoiceModel;