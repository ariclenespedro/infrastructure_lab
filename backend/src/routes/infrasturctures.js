const router = require("express").Router();

const InfrastructureController = require("../controllers/infrastructureController");

router.route("/school/infrastructures/create").post( (req, res) => InfrastructureController.create(req, res));

router.route("/school/infrastructures").get((req, res) => schoolController.listAllSchools(req, res));


module.exports = router;
