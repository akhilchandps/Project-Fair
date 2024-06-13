const multer = require("multer")
//To store multer data, All words are predefined
const storage = multer.diskStorage({
    destination:(req,file, callback)=>{

        callback(null, './uploads')
    },

    //set image name
    filename:(req,file,callback)=>{
        const filename = `image-${Date.now()}-${file.originalname}`
        callback(null,filename)
    }

})

const fileFilter = (req,file,callback)=>{

    if(file.mimetype === 'img/png'  ||  file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpg'){


        callback(null,true)
    }
    else{
        callback(null,false)
        return callback(new Error("please upload following  image extension(png,jpg,jpeg only..."))
    }
}

const multerConfig = multer({
    storage,fileFilter
})

module.exports = multerConfig