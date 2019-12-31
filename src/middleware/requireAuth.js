const jwt = require('jsonwebtoken');
const mongoose= require('mongoose');
const User = mongoose.model('User');


module.exports = (req, res, next)=>{
    const {authorization } = req.haaders;
    if(!authorization){
        return res.status(401).send({error:"bad request"});
    }
    const token = authorization.replace('Bearer ','');
    jwt.verify(token,'MYSECRETY_KEY', async (err, payload)=>{
       if(err)
       {
           res.status(401).send({error:"not authorized"})
       }

       const { UserId}= payload;
       const user = await User.findById(UserId);
       req.user= user;
       next();


    });
};