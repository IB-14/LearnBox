//requiring mongoose
const mongoose=require('mongoose');
const Schema=mongoose.Schema;

//defining structure of team schema
const Team=new Schema({
    Team_ID:{
        type:String,
        required:true,
        description:'ID of team',
    },
    Team_Name:{
        type:String,
        required:true,
        description:'Name of team'
    },
    Teacher_ID:{
        type:String,
        required:true
    },
    Students:{
        type:Array
    },
    Link:{
        type:String
    }
});

const team=mongoose.model('Team',Team);

//exporting teacher schema
module.exports=team