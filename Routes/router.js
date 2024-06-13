//1 import express

const express = require('express')


const userController = require('../Controllers/userController')

const projectController = require('../Controllers/projectControllers')

const jwtMiddileware =require('../Middilewares/jwtMiddileware')

const multerConfig = require('../Middilewares/multerMiddileware')
//2 crete a router object of express to define path

const router = express.Router()

//3 Register api call

router.post('/register',userController.register)

//4 login api call
router.post('/login',userController.login)


//5 add project api call

router.post('/project/add-project',jwtMiddileware,multerConfig.single('projectImage'),projectController.addProject)

module.exports =router

//6 Get a particular user projects

router.get('/project/get-auser-project',jwtMiddileware, projectController.getAProject)

module.exports =router


//7 Get All users projects details

router.get('/project/all-user-project',jwtMiddileware, projectController.getAlluserProject)

module.exports =router



//8 Get All users projects details

router.get('/project/home-project', projectController.getHomeProject)

module.exports =router


//9 Delete users projects details

router.delete('/project/delete-user-project/:pid', jwtMiddileware, projectController.deleteUserProject);

//10 update user project


router.put('/project/update-user-project/:pid',jwtMiddileware,multerConfig.single('projectImage'),projectController.updateUserProject)


module.exports =router


