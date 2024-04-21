const router = require('express').Router();

//Client routes
const clientRouter = require('./');
const accountRouter = require('./accounts');

/* router.use("/",clientRouter);
router.use("/",accountRouter);
router.use("/",transitionRouter); */

module.exports = router;