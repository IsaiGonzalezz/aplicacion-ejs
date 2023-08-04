const express = require ('express')
const routes = express.Router()
const imageController = require('../controller/image.controler')



routes.post('/images/:tabla', imageController.upload, imageController.uploadFile) 

module.exports = routes;

