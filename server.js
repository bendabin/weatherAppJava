/*
    This is the server that will be used to host our website and to communicate with the API's    
*/ 

const express = require("express");                //This creates a new package called express 
const app = express();                             //Create a new const; a function that represents the express module 

app.use(express.urlencoded({extended: true}));


//Handling 'GET' requests from the web browser

app.get('/', function (req, res){
    res.sendFile(__dirname + "/index.html");
});


//This will be the channel or port that we host our server on 
//Host the server on Localhost: 3000
app.listen(3000, function(){
    console.log("Server is running on port 3000")
    console.log("The server will now listen for GET requests from your browser");
});                                 
