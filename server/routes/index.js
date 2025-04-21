//we need to imoport express and create a router instance
const express = require('express');
const router = express.Router();
const mainController = require('../controllers/mainController');//  mainController from controllers folder

// App routers
router.get('/', mainController.homepage);
router.get('/about', mainController.about);

module.exports = router;// important to export the router instance so it can be used in app.js