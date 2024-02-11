const sharp = require("sharp");
const path = require("path");
const {
  deleteFromUploadDirectory,
} = require("../utils/deleteFromUploadDirectory");
const { uploadCloudinary } = require("../utils/uploadCloudinary.util");

module.exports = {
  convertWebpFileToPng: async (req, res, next) => {
    try {
      // sharp("input.avif")
      //   .jpeg({ quality: 50 })
      //   .toFile("input1-compress.jpg", (err, info) => {
      //     if (err) {
      //       console.log("errr: ", err);
      //     } else {
      //       console.log("Info", info);
      //     }
      //   });
      const { body: payload } = req;
      if (req?.files?.file) {
        const imgFile = req?.files?.file[0];
        const directoryPath = path.join(__dirname, "../uploads");
        console.log("directoryPath", directoryPath);
        const result = await uploadCloudinary("input1.jpg");
        console.log("imgFile", result);
        // deleteFromUploadDirectory([imgFile?.filename], directoryPath);
      }

      return res.json({
        status: 200,
        message: "Success",
        data: { payload },
      });
    } catch (error) {
      next(error);
    }
  },
  test: async (req, res, next) => {
    try {
      console.log("req", req.rawHeaders);
      return res.json({
        status: 200,
        message: "Success1",
      });
    } catch (error) {
      next(error);
    }
  },
};
