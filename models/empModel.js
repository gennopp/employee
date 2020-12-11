const mongoose = require('mongoose');
const { Schema } = mongoose;
const db = mongoose.connect('mongodb://localhost/zet_cc_abhishek');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);



const empModel = new Schema(
  {
    _id: { type: Number, default: 1 },
    name: { type: String },
    dob: { type: String },
    salary: { type: Number },
    skills: { type: Array },
    img: { type: String }
  }
);

empModel.plugin(autoIncrement.plugin, 'Employee');


module.exports = mongoose.model('Employee', empModel);
