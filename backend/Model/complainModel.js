const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const complainSchema = new Schema({
    machineType : {
        type : String,
        required : true
    },
   issue : {
    type : String,
    require : true
   },
   date : {
    type : String,
    required : true
   },
    user : {
        type : mongoose.Types.ObjectId,
        ref : "User",
        required : true
    },
    mechanic : {
        type : mongoose.Types.ObjectId,
        ref : "Mechanic",
        required : true
    }


})
const Complain = mongoose.model("Complain", complainSchema);
module.exports  = Complain;