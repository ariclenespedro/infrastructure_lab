const router = require('express').Router();

const schoolRouter = require('./schools');
const userRouter = require('./users');
const infrastructureRouter = require('./infrasturctures');

router.use("/",schoolRouter);
/* router.use("/",userRouter); */
router.use("/",infrastructureRouter);

module.exports = router;