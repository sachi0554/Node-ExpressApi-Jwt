require('./models/User');
const express = require('express')
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes')
const requireAuth = require('./middleware/requireAuth')
const bodyPrser = require('body-parser');

const app = express();

app.use(bodyPrser.json());
app.use(authRoutes);


const mongoUrl= 'mongodb+srv://admin:Neo@0554@cluster0-z7frf.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(mongoUrl,{
   useNewUrlParser:true,
   useCreateIndex:true
});

mongoose.connection.on('connected',()=>{
  console.log('connnect to mongooes database');
});

mongoose.connection.on('error',(err)=>{
    console.log('connnect to mongooes database', err);
});

app.get('/', requireAuth, (req,res)=>{

    res.send(`your email :${req.user.email}`);
});


app.listen(3000, ()=>{
 console.log('Listing port 3000')
});