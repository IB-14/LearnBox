//requiring mongoose
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//defining structure of student schema
const Student=new Schema({
    S_ID:{
        type:String
    },
    S_name:{
        type:String
    },
    S_email:{
        type:String,
    },
    password:{
        type:String
    },
    score:{
        type:Number
    },
    rank:{
        type:Number
    },
    badges:{
        type:Array
    }
});

const student=mongoose.model('Student',Student);

//exporting student schema
module.exports=student