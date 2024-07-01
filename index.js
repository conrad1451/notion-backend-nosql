// Note: because this is a SERVER, after making changes to this file,
//       one must RESTART the task to see the changes

// Optimization opportunity: refactor code base to query the database
// only once and read through the local data each time a new user
// is added

// _____________________________________________________________________________________________________ //

const express = require("express");
const moduleToFetch = require("./databaseModule");
const getDatabase = moduleToFetch.getDatabase;
const newEntryToDatabase = moduleToFetch.newEntryToDatabase;
const PORT = process.env.PORT || 8000;

const app = express();

// app.use(express.static("public"));
// app.use(
//   express.urlencoded({
//     extended: true,
//   })
// );

// CHQ: the endpoint of URL/users returns the database entries in JSON format
app.get("/users", async (req, res) => {
  const users = await getDatabase();
  res.json(users);
});

// app.post("/submit-form", async (req, res) => {
//   const name = req.body.name;
//   const role = req.body.role;
//   await newEntryToDatabase(name, role);
//   res.redirect("/");
//   res.end();
// });

// app.listen(PORT, console.log(`Server started on ${PORT}`)); 

// Listening to server at port
app.listen(PORT, function () { 
	console.log("server started"); 
})
