const  mongoose  = require("mongoose");

const Schema = mongoose.Schema;
// const objectId = Schema.objectId
const userSchema = new Schema({
  
  user_email: {
    type: String,
    required: true,
    // unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  username : {
    type : String,
    required : true
  },
  complains: [
   { type : mongoose.Types.ObjectId,
    ref : "Complain"
  }
  ]
  
});

const User = mongoose.model("User", userSchema);
module.exports  = User;