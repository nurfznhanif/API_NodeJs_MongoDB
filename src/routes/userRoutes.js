const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
//const jwt = require("jsonwebtoken");
const collection = require("../models/User");
const User = mongoose.model("User");



router.get("/", async(req, res) => {
    const signup = await User.find();

    res.send(signup);
})

router.post("/signup", async (req, res) => {
    try{
        const data = { email, username, password } = req.body;
        //const user = new User({ email, username, password });
        const existingUser = await collection.findOne({
            $or: [
                { email: data.email },
                { username: data.username }
              ]
        });
        //const token = jwt.sign({ userId : user._id  }, 'MY_SECRET_KEY')
        if(existingUser){
            res.send("User already exist. Please choose a different username.");
        }else{
            //hash password using bcrypt
            const saltRounds = 10; //Number of salt rounds for bcrypt
            const hashedPassword = await bcrypt.hash(data.password, saltRounds);
        
            data.password = hashedPassword; //password have been hashed with bcrypt
        
            const userdata = await collection.insertMany(data);
            //res.send(token);
            console.log(userdata);

            /* const token = jwt.sign(
                {
                    userId: user._id,
                    role: ' admin'
                },
                'MY_SECRET_KEY') */
        }
    }catch(err){
        res.status(402).send(err.message);
    }
        
});

       

router.post("/signin", async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password){
        return res.status(401).send({ error: "Invalid password or email "});
    }
    try{
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id, role: user.role }, 'MY_SECRET_KEY');
        res.send({ token })
    }catch(err){
        return res.status(422).send({ error: "Invalid password or username "});
    }
})

module.exports = router;

