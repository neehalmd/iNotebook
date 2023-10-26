const jwt = require('jsonwebtoken')
const jwt_secret ="neehalisgoodb$oy"
const user = require('../models/User')

const getuser = async(req,res,next) =>{
    //get user from jwt token and add the id from it to the req
    const token = req.header('auth-token');
    if(!token){
        return res.status(400).send({error:"please authenticate using valid token"})
    }
    
        //extract the data and assign it to res.user
        try {
            const data = jwt.verify(token, jwt_secret);
            req.user = data.user;
            next();
//call the next function which will be (req,res)
    
    }
    catch(error){
        return res.status(400).send({error:"please authenticate using valid token"})
    }
}
module.exports = getuser;