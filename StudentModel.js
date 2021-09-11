const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: String,
  location: { pincode: Number, city: String, state: String, country: String },
  subjectsWanted: [],
  batches: [{
    id: String,
    joinDate: String
  }]
})

const TeacherSchema = mongoose.Schema({
  name: String,
  location: { pincode: Number, city: String, state: String, country: String },
  batches: [{
    subject: String,
    name: String,
    fee: { monthly: Number, yearly: Number },
    doc: String
  }],
  payments: [{
    date: String,
    paidBy: String, payerId: String,
    amount: Number
  }]
})

Students = mongoose.model("student", StudentSchema);
Teachers = mongoose.model("teacher", TeacherSchema);

module.exports = { Students, Teachers };
