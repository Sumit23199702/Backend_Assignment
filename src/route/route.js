const express = require('express');
const router = express.Router();

const studentController = require('../controller/studentController.js');
const multer = require("../multer/multer.js")

const cpUpload = multer.upload.fields([{ name: 'studentImage', maxCount: 1 }, { name: 'identity', maxCount: 1 }])

router.post('/StudentData', cpUpload, studentController.createStudent)

module.exports = router