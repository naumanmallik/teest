const router = require("express").Router();
const { imageController } = require("../controllers");
const { uploadSingleFile } = require("../utils/upload.util");

router.post(
  "/compress",
  uploadSingleFile,
  imageController.convertWebpFileToPng
);

router.get(
  "/test",
  imageController.test
);

module.exports = router;
