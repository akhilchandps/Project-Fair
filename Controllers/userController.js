//1  import useschma or model

const users = require('../Models/userSchema');
// const user = require('../Models/userSchema')

const jwt = require('jsonwebtoken')



//2. Register Logic

exports.register =  async(req,res) =>{
console.log("inside register method");
    //1 accepts data from client
    const {username,email,password}=req.body
    console.log(username,email,password);

    try{
 //Checks if the email is already exist

 const existingUser = await users.findOne({email})
 console.log(existingUser);

 if(existingUser){
    res.status(406).json("user Already registered")
 }
 else{
   const newUser = new users({
    username,
    email,
    password,
    github:"",
    livelink:"",
    profile:""
   })
   await newUser.save()
   res.status(200).json(newUser)
 }

    }
    catch(err){
       
        res.status(500).json("Register failed...")
    }
} 


//login logic

exports.login = async(req,res)=>{

  const {username,email,password} = req.body
try{
  const existingUser = await users.findOne({email,password})

  if(existingUser){
   
    const token = jwt.sign({userId:existingUser._id},"super2024");
    console.log(token);
    res.status(200).json({existingUser,token})
  }
  else{
    res.status(404).json("invalid emial or password")
  }

}
 catch(err){

  res.status(500).json("Register failed..." +err)
 }

}