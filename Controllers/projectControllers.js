const projects = require('../Models/projectSchema');

//add project logic

exports.addProject = async(req,res)=>{

    console.log("inside the add project method");

    const {title,language,github,livelink,overview} = req.body
    const projectImage = req.file.filename
    const userId = req.payload
    console.log(title,language,github,livelink,overview,projectImage);
    console.log(userId);


    try{

        const existingProject = await projects.findOne({github})

        if(existingProject){

            res.status(404).json("project already exist")
        }
        else{

          const newProject = new projects({title,language,github,livelink,overview,projectImage,userId})
          await newProject.save()
          res.status(200).json(newProject)
        }
    }
    catch(err){

        res.status(401).json({message:err.message})
    }


 


}


//1 Get a particular user projects details


exports.getAProject = async(req,res)=>{

    //get userId

    const userId = req.payload
    try{
        const AProject = await projects.find({userId})
        if(AProject){
            res.status(200).json(AProject)
        }
        else{
            res.status(401).json("can't find project")
        }
    }
    catch(err){
        res.status(401).json({message:err.message})
    }

}

//2 Get all projects details


exports.getAlluserProject = async(req,res)=>{

  const searchKey = req.query.search //step 4 search
  console.log(searchKey);

//step 5 search, case sensitive & search

const query={}
if(searchKey){
    query.language = {$regex:searchKey,$options:"i"}
}
   

    try{
        const AlluserProject = await projects.find(query)
        if(AlluserProject){
            res.status(200).json(AlluserProject)
        }
        else{
            res.status(401).json("can't find project")
        }
    }
    catch(err){
        res.status(401).json({message:err.message})
    }

}

//3 Get 3 projects details for home project


exports.getHomeProject = async(req,res)=>{

  
    try{
        const HomeProject = await projects.find().limit(3)
        if(HomeProject){
            res.status(200).json(HomeProject)
        }
        else{
            res.status(401).json("can't find project")
        }
    }
    catch(err){
        res.status(401).json({message:err.message})
    }

}


exports.deleteUserProject = async(req,res)=>{
    
    const {pid} = req.params  

try {
    
    const deleteUserProject = await projects.findOneAndDelete({_id:pid})
//Creates a findOneAndDelete query: atomically finds the given document, deletes it, and returns the document as it was before deletion.
    
res.status(200).json(deleteUserProject)

} 
catch (error) {
    res.status(401).json({message:error.message});
}


}

exports.updateUserProject = async(req,res)=>{

    const {title,language,github,livelink,overview,projectImage} = req.body
    userId = req.payload
    const {pid}= req.params
    const {uploadImage} = req.file?req.file.filename:projectImage
    try {
        //FIND PARTICAULAR PROJECT. UPDATE AND DATA AND SAVE CHANGES
        const updateproject = await projects.findByIdAndUpdate({ _id:pid},{title,language,github,livelink,overview,projectImage:uploadImage,userId})
        await updateproject.save()
        res.status(200).json(updateproject)
        
    } catch (err) {
        res.status(401).json({message:err.message})
    }

}