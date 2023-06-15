const  mongoose  = require("mongoose");

const Schema = mongoose.Schema;

const mechanicSchema = new Schema({
 mechanic_name : {
    type : String,
    required : true
  },
  mechanic_email: {
    type: String,
    required: true,
   // unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  machineType: {
    type : String,
    required : true
  },
  complains: [
    { type : mongoose.Types.ObjectId,
     ref : "Complain"
   }
  ]
});

const Mechanic = mongoose.model("Mechanic", mechanicSchema);
module.exports  = Mechanic;