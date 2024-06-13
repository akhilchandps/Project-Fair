const applicationMidiileware = (req,res,next)=>{
    console.log("inside the Application middileware");
    next()
}

module.exports = applicationMidiileware