require("./models/User");
//require("./models/Transaction");
const mongoose = require("mongoose");
const express = require("express");
const bcrypt = require("bcrypt");
const dotenv = require("dotenv");
const path = require("path");
const userRoutes = require("./routes/userRoutes");
//const transactionRoutes = require("./routes/transactionRoutes");
//const requireAuth = require('./middlewares/requireAuth');

const app = express();


//convert data into JSON format
app.use(express.json());
app.use(express.urlencoded
    ({
        extended: true
    }));
    
app.use("/users", userRoutes);
//app.use("/transaction", transactionRoutes)

dotenv.config();
const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL

//const mongoUri = "mongodb://localhost:27017/login-register-tut" ;
mongoose.connect(DATABASE_URL);

mongoose.connection.on("connected", () => {
    console.log("Connected to mongo instance");
});

mongoose.connection.on("error", (err) => {
    console.log("Error connect to mongo instance", err);
});

/* app.get('/', requireAuth, (req, res) => {
    res.send('Hello World'); 
}) */

app.listen(PORT, () => {
    console.log("Express API running on port : " + PORT);
});