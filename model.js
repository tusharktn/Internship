const mongoose = require("mongoose");

const tableSchema = new mongoose.Schema({
    name:String,
    department:String,
    dob:String,
    phoneNumber:String
});

const tableModel = mongoose.model("TableData",tableSchema);

module.exports = tableModel;