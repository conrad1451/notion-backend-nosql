// Importing express 
const express = require('express'); 

// Creating instance of express 
const app = express(); 

const PORT = process.env.PORT || 8081;

// Handling GET / Request 
app.get('/', function (req, res) { 
	res.send("Hello World!, I am server created by expresss"); 
}) 

// Testing custom path
app.get('/bro/', function (req, res) { 
	res.send("Ayo!, I'm a new path in this ExpressJS app. What's good?"); 
}) 

// Listening to server at port 3000 
app.listen(PORT, function () { 
	console.log("server started"); 
})
