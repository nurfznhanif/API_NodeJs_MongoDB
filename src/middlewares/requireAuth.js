/* const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const User = mongoose.model("User");
const Transaction = mongoose.model("Transaction");

module.exports = (res, req, next) => {
    const { authorization } = req.headers;

    if(!authorization){
        return res.status(401).send({ error: 'You must be logged in. '});
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
        if(err){
            return res.status(401).send({ error: 'You must be logged' })
        };

        const { userId } = payload;

        if(role != "admin"){
            return res.status(401).send({ error: 'Role anda tidak bisa melakukan akses tersebut'});
        }

        const user = await User.findById(userId);
        req.user = user;
        next()
    });
}

*/