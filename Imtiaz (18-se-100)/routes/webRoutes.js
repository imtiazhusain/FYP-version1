const express = require('express')
const router = express.Router()

const homeController = require('../controllers/homeController')
const loginAsTeacherController= require('../controllers/loginAsTeacherController')
const loginAsStudentController= require('../controllers/loginAsStudentController')
const signUpAsTeacherController= require('../controllers/signUpAsTeacherController')
const signUpAsStudentController= require('../controllers/signUpAsStudentController')



router.get('/',homeController)
router.get('/loginAsTeacher',loginAsTeacherController)
router.get('/loginAsStudent',loginAsStudentController)
router.get('/signUpAsTeacher',signUpAsTeacherController)
router.get('/signUpAsStudent',signUpAsStudentController)


module.exports = router