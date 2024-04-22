const router = require("express").Router();

const InfrastructureController = require("../controllers/infrastructureController");

router.route("/schools/:school_id/infrastructures/create").post( (req, res) => InfrastructureController.create(req, res));

router.route("/schools/:school_id/infrastructures").get((req, res) => InfrastructureController.listInfrastructuresOfSchool(req, res));

router.route("/infrastructure/update").post((req, res) => InfrastructureController.update(req, res));


module.exports = router;
