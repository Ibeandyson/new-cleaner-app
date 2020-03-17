// importing needed moudule
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const jwt = require("jsonwebtoken");

const passport = require("passport");
const cors = require('cors');

const users = require("./routes/api/users");
const bookings = require("./routes/api/bookings");
const messages = require("./routes/api/messages");


// setting my app to use express
const app = express()
// setting my app to use cors

app.use(cors({}));
// Bodyparser middleware
app.use(bodyParser.urlencoded({
  extended: false
}))
app.use(bodyParser.json());


//DB config
const db = require("./config/keys").mongoURI;

// connection to my cloud mongoDB
mongoose.connect(
      db,
        { useNewUrlParser: true },
)
.then(()=>{
    console.log('connected to mongoDB Atlas!');
})
.catch((error)=>{
    console.log('not connected to mongoDB Atlas!');
    console.error(error);
});




 //Passport middleware
 app.use(passport.initialize());

 //Passport config
 require("./config/passport")(passport);

// Routes
app.use("/api/users", users);
app.use("/api/bookings", bookings);
app.use("/api/messages", messages)



 module.exports = app;
           

       