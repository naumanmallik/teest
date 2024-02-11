const fs = require("fs");

exports.deleteFromUploadDirectory = (fileArray, directory) => {
  for (const file of fileArray) {
    if (file) {
      const isExistFile = fs.unlinkSync(`${directory}/${file}`);

      if (isExistFile) {
        console.log("delete!");
      }
    }
  }
};
