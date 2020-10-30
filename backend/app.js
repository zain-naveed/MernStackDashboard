const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;
const User = require('./route/user');
const { urlencoded } = require('body-parser');




http.createServer(app);

var con = 'mongodb://localhost/dashboard';
 mongoose.connect(con,
  {useCreateIndex:true,
    useUnifiedTopology:true,
    useNewUrlParser:true})
                           .then(()=>{
                              console.log("mongodb connected!!")
                             })
                             .catch(()=>{
                               console.log("mongodb not connected!!")
                              })


// make api's
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept,Authorization"
  );
  res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE,OPTIONS');
  next();
});
app.use(bodyParser.json())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use('/',User);
app.use(function(req,res,next){
  res.send("404 Error-NOt Found!!!")
})
app.listen(PORT,()=>console.log('server is running at port http://localhost:5000'));