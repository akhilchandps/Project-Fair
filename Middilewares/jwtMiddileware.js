
const jwt = require('jsonwebtoken')

const jwtMiddileware = (req,res,next)=>{

    console.log("inside jwt Middileware");
try{
//get the token

const token = req.headers['authorization'].slice(7)
console.log(token);

//verify the token

const jwtVerification = jwt.verify(token,"super2024")
console.log(jwtVerification);
req.payload = jwtVerification.userId

    next()
}
catch(err){

    res.status(401).json({"Authorizationerror":err.message})
}
  


}

module.exports = jwtMiddileware