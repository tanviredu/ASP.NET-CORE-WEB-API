const router     = require("express").Router();
const BookRouter = require("./BookApi/BookRouter");

router.use("/books",BookRouter);
module.exports = router;




