const express = require('express');
const cors = require('cors');
require('dotenv').config();

const user = require('./router/user')

const app = express();

app.use(express.urlencoded({extended:false}))
app.use(express.json())
app.use(cors())

const PORT = process.env.PORT || 3000;

app.use('/user',user);

app.listen(PORT, (err)=>{
    if(err)
        return console.log(err);
    console.log(`Server is up at ${PORT}`)
})