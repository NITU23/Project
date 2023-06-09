const  mongoose  = require("mongoose");

const Schema = mongoose.Schema;

const mechanicSchema = new Schema({
  name : {
    type : String,
    required : true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  machineType: {
    type : String,
    required : true
  }
});

const Mechanic = mongoose.model("Mechanic", mechanicSchema);
module.exports  = Mechanic;