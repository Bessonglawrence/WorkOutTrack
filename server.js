const express = require('express');
const Port = process.env.Port || 3500;


const app = express();

app.get('/', (req, res) =>{
    res.send({
        "name": "lawrence",
        "mission": "Trying out server"
    })
})

app.listen(Port, () => console.log(`Port is running on ${Port}`))