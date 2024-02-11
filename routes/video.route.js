const router = require("express").Router();
const { videoController } = require("../controllers");

router.post("/mp3", videoController.convertMP4toMP3);

module.exports = router;
