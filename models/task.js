const mongoose = require("mongoose")
const TaskSchema=mongoose.Schema({
  taskid:{
    type:String, 
    required:true
  },
  taskname:{
    type:String, 
    required:true
  },
  taskdescription:{
    type:String, 
    required:true
  },
    files:{
      type:String,
     // required:true
  },
  
   leader:{
        type:String, 
        required:true
 },
      associate:{
        type:String, 
        required:true
 },
      status:{
        type:String, 
        required:true
 },
      approval:{
        type:String, 
        required:true
 }

  
})
module.exports=mongoose.model('Tasks',TaskSchema); 



