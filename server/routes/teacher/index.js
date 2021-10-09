//requiring packages
const express=require('express')
const app=express();
const cookieParser=require('cookie-parser');
const expressSession=require('express-session');
const jwt=require('jsonwebtoken') 
const Teacher=require("../../models/teacher")

app.use(expressSession({
    secret: "secretcode",
    resave:true,
    saveUninitialized:true
}));

app.use(cookieParser("secretcode"));


app.get("/",(req,res)=>{
    res.send("teacher route");
})

app.post('/login',async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    const result=await Teacher.findOne({T_email:email});
    if(result && password===result.password) {
        jwt.sign(
            {id:result._id},
            process.env.JWT_SECRET,
            {expiresIn:process.env.JWT_EXPIRESIN},
            (err,token)=>{
                if(err) console.log(err)
                const cookieOptions={
                    expires:new Date(
                        Date.now()+process.env.Cookie_Expire*24*60*60*1000
                    ),
                    httpOnly:true
                }
                res.cookie('jwt',token,cookieOptions)
                res.json({teacher:req.body})
            }
        )
    }
    else res.json({msg:"Teacher is not registered/Wrong password"})

    
}) 


module.exports=app