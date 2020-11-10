const router      = require("express").Router();
const controller  = require("./BookController");
const createRoute = require("../../util/createRoute"); 

createRoute(router,controller);

module.exports = router;