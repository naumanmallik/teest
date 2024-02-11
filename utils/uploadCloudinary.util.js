const cloudinary = require("cloudinary").v2;

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.API_kEY,
  api_secret: process.env.API_SECRET,
});

exports.uploadCloudinary = async (file) => {
  const result = await cloudinary.uploader.upload(file, {
    quality: "auto:best",
    fetch_format: "auto",
    folder: 'images'
  });
  return result;
};
