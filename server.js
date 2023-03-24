require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const WorkOutRoutes = require('./routes/workouts');
const UserRoutes = require('./routes/user')
//const Port = process.env.Port || 3500


// App initialising and Middleware
const app = express();

app.use(express.json());

app.use((req,res,next) =>{
    console.log(req.path, req.method);
    next();
})


// routes
app.use('/api/workouts', WorkOutRoutes)

app.use('/api/user', UserRoutes);

//Connect to db and listening to port
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URI)
.then(() =>{
    // Listening for request
    app.listen(process.env.PORT, () => console.log(`Connected to database and Listening on Port ${process.env.PORT}`))
})
.catch((error) =>{
    console.log(error)
})

