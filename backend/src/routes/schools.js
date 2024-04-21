const router = require("express").Router();

const schoolController = require("../controllers/schoolController");

router.route("/school/create").post( (req, res) => schoolController.create(req, res));

/* //login do client router
router.route("/auth/login").post((req, res) => authController.login(req, res));

//Change password router
router.route("/auth/changePassword").post( auth ,(req, res) => authController.changePassword(req, res));

//get data client router
router.route("/cliente/:clientId").get(auth,(req, res) => clentController.getClient(req, res)
); */

module.exports = router;
