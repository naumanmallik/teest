const fs = require("fs");
const multer = require("multer");
const path = require("path");

const uploadsDir = "uploads/";

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    if (!fs.existsSync(uploadsDir)) fs.mkdirSync(uploadsDir);
    cb(null, uploadsDir);
  },
  filename: function (req, file, cb) {
    // Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(
      null,
      Date.now() +
        "-" +
        file.originalname?.split(".")?.[0] +
        path.extname(file.originalname)
    );
  },
});

const upload = multer({
  storage,
  limits: {
    fileSize: 10 * 1024 * 1024, // 10MB
  },
});

exports.uploadSingleFile = upload.fields([
  {
    name: "file",
    maxCount: 1,
  },
]);
