

//create a schema of the database

var mongoose = require('mongoose');
var schema = mongoose.Schema;

var userSchema = new schema({

    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
     phone:{
        type:String,
        required:true
    },
  
})

module.exports = mongoose.model('employees',userSchema); //this is the table name "employees"