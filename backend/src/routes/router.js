const router = require('express').Router();

const schoolRouter = require('./schools');
const userRouter = require('./users');

router.use("/",schoolRouter);

module.exports = router;