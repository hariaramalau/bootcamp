const mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost:27017/bootcamp22");

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    customer_id: String,
    name: String,
    phone: String,
    address: String,

})

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
