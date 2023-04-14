const express = require("express");
const controller = require("../../controller/tools.controller");
const viewCount = require("../../middleWire/viewCount");
const limiter = require("../../limiter/limiter");

const router = express.Router();
// router.get("/", (req, res) => {
//   res.send("tools found");
// });

// router.post("/tools", (req, res) => {
//   res.send("tools added");
// });

router.route("/").get(controller.getAllTools).post(controller.saveATool);
router.route("/:id").get(viewCount, limiter, controller.detailsTool);

module.exports = router;
