const router = require("express").Router();

router.use("/image", require("./image.route"));
router.use("/video", require("./video.route"));

module.exports = router;
