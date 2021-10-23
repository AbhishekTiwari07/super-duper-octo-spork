const jwt = require('jsonwebtoken')
const User = require('../model/user')
require('dotenv').config()

const auth = async (req,res,next) =>{
        
    try{
        const token = req.headers.authorization.split(" ")[1]
        const decoded = jwt.verify(token,process.env.TOKEN_SECRET)
        
        const user = await User.findOne({ 
            email : decoded.email
        })
        if(!user){
            throw new Error("Can't Login")
        }
        req.token = token
        req.user = user
    }
    catch(e){
        return res.status(400).send({
            error : e.message,
            message : "Please Authenticate"})
    }
    next()
}

module.exports = auth