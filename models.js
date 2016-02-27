var mongoose = require('mongoose');  

var Schema = mongoose.Schema;  

var userSchema = mongoose.Schema({    
     token : String,     
     email: String,  
     hashed_password: String,    
     salt : String,  
     temp_str:String 
});  

mongoose.connect('mongodb://lucky_cahya:munc4n93l4@ds011228.mlab.com:11228/node-android'); 
module.exports = mongoose.model('users', userSchema);