//requiring mongoose
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//defining structure of teacher schema
const Teacher=new Schema({
    T_ID:{
        type:String,
        required:true,
        description:'ID of teacher',
        unique:true
    },
    T_name:{
        type:String,
        required:true,
        description:'Name of teacher'
    },
    T_email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String
    }
});

const teacher=mongoose.model('Teacher',Teacher);

//exporting teacher schema
module.exports=teacher