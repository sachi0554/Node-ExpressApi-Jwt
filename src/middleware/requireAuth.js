const jwt = require('jsonwebtoken');
const mongoose= require('mongoose');
const User = mongoose.model('User');


module.exports = (req, res, next)=>{
    const {authorization } = req.headers;
    if(!authorization){
        return res.status(401).send({error:"bad request"});
    }
    const token = authorization.replace('Bearer ','');
    jwt.verify(token,'MYSECRETY_KEY', async (err, payload)=>{
       if(err)
       {
           res.status(401).send({error:"not authorized"})
       }

       const { userId}= payload;
       const user = await User.findById(userId);
       req.user= user;
       next();


    });
};