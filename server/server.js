const express = require('express');
const cors = require('cors');
require('dotenv').config();
require('./db/db')

const user = require('./router/user');
const todo = require('./router/todo')
const roadmap = require('./router/roadmap');

const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000;

app.use('/user', user);
app.use('/todo', todo);
app.use('/roadmap', roadmap);

app.listen(PORT, (err)=>{
    if(err)
        return console.log(err);
    console.log(`Server is up at ${PORT}`)
})