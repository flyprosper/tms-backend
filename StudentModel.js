const mongoose = require("mongoose");

const StudentSchema = mongoose.Schema({
  name: String,
  fees: Number,
  batch: String,
  joinDate: String,
})

module.exports = mongoose.model("studentSchema", StudentSchema);
