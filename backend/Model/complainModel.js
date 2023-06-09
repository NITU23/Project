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
    mechanicName: {
        type: String,
        required : true
    },
    username : {
        type : String,
        required  : true
    }

})
const Complain = mongoose.model("Complain", complainSchema);
module.exports  = Complain;