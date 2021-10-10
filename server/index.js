const express=require('express');
const app=express();
require('dotenv').config()
const cors=require('cors')
const mongoose=require('mongoose')
const jwt = require("jsonwebtoken");
const rp = require("request-promise");
const http = require('http').createServer(app);
const io = require('socket.io')(http);

const mongo=require("./mongo")
const config = require("./zoom/config");

const Team=require("./models/team")

//working with POST and PUT requests
app.use(express.json()) //recognize incoming request as a JSON object
app.use(express.urlencoded({extended: true}));//recognize incoming requests as string or array

//working with cross origin requests
app.use(cors());

//student route
app.use("/student",require("./routes/student/index"));

//teacher route
app.use("/teacher",require("./routes/teacher/index"));


//collab whiteboard
io.on('connection', (socket)=> {
    socket.on('canvas-data', (data)=> {
          socket.broadcast.emit('canvas-data', data);
          
    })
})


//zoom meeting logic
var email, userid, resp;
const payload = {
    iss: config.APIKey,
    exp: new Date().getTime() + 5000,
};
const token = jwt.sign(payload, config.APISecret);
app.post("/meeting", (req, res) => {
    email = "yashi.shukla2010@gmail.com";
    var options = {
    method: "POST",
    uri: "https://api.zoom.us/v2/users/" + email + "/meetings",
    body: {
      topic: "Meeting",
      type: 1,
      settings: {
        host_video: "true",
        participant_video: "true",
      },
    },
    auth: {
      bearer: token,
    },
    headers: {
      "User-Agent": "Zoom-api-Jwt-Request",
      "content-type": "application/json",
    },
    json: true, //Parse the JSON string in the response
  };

  rp(options)
    .then(function (response) {
      console.log("response is: ", response.join_url);
      // response.status(200).json(response);
      let dataRes = {
        join_url: response.join_url,
      };
      res.status(200).json(dataRes);

      // res.send("create meeting result: " + JSON.stringify(response));
    })
    .catch(function (err) {
      // API call failed...
      console.log("API call failed, reason ", err);
    });
});

app.post("/newMeeting",async (req,res)=>{
  const team_id=req.body.id;
  const url=req.body.url;

  const update= await Team.updateOne({Team_ID:team_id},[{$set:{Link:url}}])
})

app.post("/getURL",async(req,res)=>{
  const id=req.body.id;
  const link=await Team.findOne({Team_ID:id});
  res.json({link:link.Link});
})


const PORT=process.env.PORT||5000;



app.listen(PORT,async ()=>{console.log(`Server is listening on port ${PORT}`);await mongo()});