const express = require('express')

//router is a module from express which is used to reach end points
const router = express.Router()

//this is mongoose model which is created using userSchema
const User = require('../models/User')

//this is a node package express validator used to validate the input value (email ,pass,name)
const { body,validationResult } = require('express-validator')

//this is a node package that is used for hashing of password as it cannot be directly stored in the database as it will be risky
const bcrypt = require('bcryptjs')

//the jsonwebtoken is node module/package used to ensure secure communication between client and server
var jwt = require('jsonwebtoken')

//this is importing of a middleware ,middleware can be considered as  a geenraized step of doing certain things as in the login part we are returning the a token to the user , howeevr to further recognize the user once logged we include a middleware where in this case it will extract the id that the token will contain,it will modify the req,res and pass the control to the next function placed after it 
var fetchuser = require('../middleware/getuser')

//this is a secretkey that will be used to secure the connection(basically used in digital signature part where we want to know whether the payload/data in the token has beeen altered for misuse and it will recognnize it and deny the access)
const jwt_secret ="neehalisgoodb$oy"

// ROUTE1  create a user using : Post "/api/auth/createUser" NO login requird
router.post('/createUser',[
    body('name','enter a unique name').isLength({min:3}),
     body('email','enter a valid email').isEmail(),
    body('password','enter a strong password').isLength({min:5})
],async(req,res)=>{
    let success = false;
    //if there are errors return bad request and errors,else 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({success,erros : errors.array()});
    }
    
   
    try{ //check whether the user with this email exist already
    let user =await User.findOne({email:req.body.email})

    //if user already exist then return bad status and error message
    if(user){
        return res.status(400).json({success,error : "Sorry User with same email already exist"})
    }
    //its a asynchronous function so (req ,res) is declared async and whereever there are promises use await,here
    //we create a user using the module imported
    const salt =await bcrypt.genSalt(10);
    var secPass =await bcrypt.hash(req.body.password,salt);
    user =await User.create({
        name : req.body.name,
         email: req.body.email,
        password : secPass
    })
    
   // .then(user =>res.json(user))
    //.catch(err=>{console.log(err)
    //res.json({error :'Please Enter Unique Value for' ,message:err.message})});

    
    //using the jsonwebtokrn to ensure safe communcation betweeen the cliennt and the server we use the 
    //jsonwebtoken its a npm module and has predefined functions such as sign which is a unique digital signature that can be used to identify the users, we  must specify the data in this the id is specicied because it is definitely unique and is also used for fast retrivel and another parameter is the secret key that we pass
    const data ={
        user :{
            id:user.id
        }
    }
     const authToken = jwt.sign(data,jwt_secret)
     
    //token ko specify karne ke liye
    success = true;
    res.json({success,authToken})
}catch(error){
    //errror sambhalne ke liye
    console.log(error.message);
    res.status(500).send("Internal Server Error")
}
    })



    //ROUTE2  authenticate user using : Post "/api/auth/createUser" NO login requird
    router.post('/login',[
        body('email','enter a valid name').isEmail(),
        body('password','cannot be blank').exists()
     
    ],async(req,res)=>{
        let success = false;
        //if there are errors return bad request and errors,else 
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({erros : errors.array()});
    }

    //array destructuring for further verofication of whether the user exoists
    const{email,password} = req.body;
    try{
        //the findOne function is a mongoose model function 
        let user =await User.findOne({email});
        if(!user){
            success = false;
            return res.status(400).json({error:"Login with proper credentials"})
        }
        //used to compare the password
        const passwordCompare =  await bcrypt.compare(password,user.password);
        if(!passwordCompare){
            success = false;
            return res.status(400).json({success,error:"Login with proper credentials"})
        }
        //on password macth success create and return a token sign function takes two parameter one is data and other is secret key,here in data we crete a user object as per curren reqirements
        const data={
            user:{
                id:user.id
            }
        }
        const authToken = jwt.sign(data,jwt_secret);
        success =true;
        res.json({success,authToken})


    }catch(err){
        console.log(error.message);
        res.status(500).send("Internal Server Error")
    

    }
    })

    // ROUTE3  get user details : Post "/api/auth/getuser" login requird
    //we specify the middleware in the argument and the control passes to the middleware
    router.post('/getuser', fetchuser,  async (req, res) => {

        try {
        userId = req.user.id;
          const user = await User.findById(userId).select("-password")
          res.send(user)
        } catch (error) {
          console.error(error.message);
          res.status(500).send("Internal Server Error");
        }
      })
module.exports = router