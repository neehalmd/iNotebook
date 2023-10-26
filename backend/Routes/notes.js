const express = require('express')
const router = express.Router()
const fecthuser  = require('../middleware/getuser')
const Notes = require('../models/Notes')
const { body,validationResult } = require('express-validator')


//ROUTE 1 ,get all the notes of the logged in user
router.get('/fetchallnotes',fecthuser, async(req,res)=>{
   try{
      const notes = await Notes.find({user : req.user.id});
   res.json(notes);
   }
   catch(error){
      //errror sambhalne ke liye
    console.log(error.message);
    res.status(500).send("Internal Server Error")
   }
   
   
   
})

//ROUTE 2 to add a new note using post  login required

router.post('/addnotes',[
   body('title','enter a valid title').isLength({min :3}),
    body('description','enter a good desc').isLength({min:5}), 
    
],fecthuser, async(req,res)=>{
   try{
      const{title,description,tag}= req.body;
   const errors = validationResult(req.body);
   if(!errors.isEmpty()){
      return res.status(400).send({errors : error.array()});

   }
   const note = new Notes({
      title,description,tag,user:req.user.id
   })
   const  savednote = await note.save();
   res.json(savednote)
   
   }
   catch(error){
      //errror sambhalne ke liye
    console.log(error.message);
    res.status(500).send("Internal Server Error")
   }
   


})

//ROUTE3 Upadate  an existing note  login required
router.put('/updatenote/:id',fecthuser, async(req,res)=>{
   try{
       const{title,description,tag} = req.body;
   //create a new note
   const newnote  = {};
   if(title){
      newnote.title = title
   }
   if(description){
      newnote.description = description
   }
   if(tag){
      newnote.tag = tag
   }

   let note =await Notes.findById(req.params.id)
   if(!note){
      return res.status(401).send("unauthorized access")
   }
   if(note.user.toString()!=req.user.id){
      return res.status(401).send("unauthorized access")
   }
   note = await Notes.findByIdAndUpdate(req.params.id,{$set : newnote},{new:true})
   res.json({note})
   }catch(error){
      console.log(error.message);
    res.status(500).send("Internal Server Error")
   }
  

   //find note to be updated
  

})
//ROUTE3 delete  an existing note  login required
router.delete('/deletenote/:id',fecthuser, async(req,res)=>{
   //find note and check if the note belongs to logged in user and delete
   try{
       let note =await Notes.findById(req.params.id)
   if(!note){
      return res.status(401).send("unauthorized access")
   }
   
   if(note.user.toString()!=req.user.id){
      return res.status(401).send("unauthorized access")
   }
   note = await Notes.findByIdAndDelete(req.params.id)
   res.json({"success" : "Note has been deleted"});
   }catch(error){
      console.log(error.message);
    res.status(500).send("Internal Server Error")
   }
  
})

module.exports = router