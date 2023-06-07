require('dotenv').config();
const express = require("express");
// const bodyParser = require("body-parser");
const https= require("https");
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
// app.use(bodyParser.urlencoded({extended:true}));


app.post('/create', async(req,res)=>{
    const name= req.body.contactInfo.contactName;
    const email= req.body.contactInfo.email;
    const company = req.body.contactInfo.company;
    const message = req.body.contactInfo.message;
    
    console.log(name +" has email: "+ email);

        var data = {
        members: [
            {
                email_address: email,
                status: "subscribed",
                merge_fields: {
                    FNAME: name,
                    CNAME: company,
                    MESSAGE:message
                }
            }
        ]
    };

   const jsonData = JSON.stringify(data);

   const url= process.env.MAILCHIMPURL;
   
   const options ={
        method:"POST",
        auth: process.env.MAILCHIMPAUTH
   }

   //the http request without using a thrid party method
   const request= https.request(url, options, function(response) {
            response.on("data", function(data){
                console.log(JSON.parse(data));
                if(response.statusCode == 200){
                    
                    res.send("success");
                }
                else{
                    
                    res.send("failed")
                }
            })
   })
   request.write(jsonData);
   request.end();
})


app.listen(3001, function(){
    console.log("Server is running on port 3001");
})