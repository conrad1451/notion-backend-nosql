// Note: because this is a SERVER, after making changes to this file,
//       one must RESTART the task to see the changes

// Optimization opportunity: refactor code base to query the database
// only once and read through the local data each time a new user
// is added

// const DATA_FROM_FORM = "";
// const BASE_URL = NOTION_API_DATABASE;

const DESTINATION__BACK_TO_DATABASE = "";

const express = require("express");

// Following line is where NodeJS server is coupled to the HTML
const moduleToFetch = require("./indexFromOrig");
// const moduleToFetch = require("./indexFromOrig.js");
const getDatabase = moduleToFetch.getDatabase;
const newEntryToDatabase = moduleToFetch.newEntryToDatabase;
 
const PORT = process.env.PORT || 8000;

const app = express();

// app.use(express.static("public"));
// app.use(
//   express.urlencoded({
//     extended: true,
//   }),
// );

// BAD ERROR TO REMOVE
// // CHQ: Reads all data entries from the database (Read)
// app.get(BASE_URL, async (req, res) => {
//   // res.send("You are currently on the users page. You should be reading data entries from the Notion database"); 

// 	const users = JSON.parse(req);
// 	res.send(req);
// 	  // res.json(req);
//   // const users = await getDatabase();
//   // res.json(users);
// });

// CHQ: Reads all data entries from the database (Read)
app.get("/", async (req, res) => {
  const users = await getDatabase();
  res.json(users);
});

// BAD ERROR
// // CHQ: Posts a new entry to the database (Create)
// app.post("/submit-form", async (req, res) => {
//   const name = req.body.name;
//   const role = req.body.role;
//   await newEntryToDatabase(name, role);
//   res.redirect("/");
//   res.end();
// });

// CHQ: Posts a new entry to the database (Create)
app.post(DESTINATION__BACK_TO_DATABASE, async (req, res) => {
// app.post("/submit-form", async (req, res) => {
  const name = req.body.name;
  const role = req.body.role;
  await newEntryToDatabase(name, role);
  // the changes here worked
  // await newEntryToDatabase("ddd", "dsafdsaf");
  res.redirect("/");
  res.end();
});

// Listening to server at port
app.listen(PORT, function () { 
	console.log("server started"); 
})
