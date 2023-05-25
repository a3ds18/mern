const express = require('express');
require('dotenv').config();

const workoutRouter=require('./routes/workout');
const app = express();

app.use(express.json());

app.use((req, res, next) =>{
    console.log(req.path , req.method);
    next();
});

app.use('/api/workouts' ,workoutRouter);

app.listen(process.env.PORT,()=>{
    console.log('listening on 4000');
})

//