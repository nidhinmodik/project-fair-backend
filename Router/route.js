//import express 
const express = require('express')

//import userController function from Controllers
const userController = require('../Controllers/userController')
const projectController = require('../Controllers/projectController')

const jwtMiddleware = require('../Middlewares/jwtMiddleware')

const multerConfig = require('../Middlewares/multerMiddleware')

//create a router object of express to define routes(paths)
const router = new express.Router()

//using router object to define paths

//1 Register API routes - localhost:4000/register
router.post('/register',userController.register)

//2 login API routes - localhost:4000/login
router.post('/login',userController.login)

//3 add user project api routes - localhost:4000/project/add
router.post('/project/add',jwtMiddleware,multerConfig.single('projectImage'),projectController.
addUserProject)

//4 get user project api - localhost:4000/user/all-projects
router.get('/project/all-user-projects',jwtMiddleware,projectController.getUserProject)

//5 get all projects routes - localhost:4000/project/all-projects
router.get('/project/all-projects',jwtMiddleware,projectController.getAllProjects)

//6 get home page routes - localhost:4000/project/home-projects
router.get('/project/home-projects',projectController.getHomeProjects)

//7 update project route - localhost:4000/project/update-project/78289678994
router.put('/project/update-project/:id',jwtMiddleware,multerConfig.single('projectImage'),projectController.editProject)


module.exports = router