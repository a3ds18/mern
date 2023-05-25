const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const workoutRouter=require('./routes/workout');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) =>{
    console.log(req.path , req.method);
    next();
});
mongoose.connect(process.env.MONGOURI)
.then(()=>{
    
app.listen(process.env.PORT,()=>{
    console.log('connected to db & listening on 4000');
})
})
.catch((err)=>{
    console.error(err);
});
app.use('/api/workouts' ,workoutRouter);


//