const cron = require("node-cron");
const { uploadCloudinary } = require("./uploadCloudinary.util");

const task = async () => {
  const result = await uploadCloudinary("input3.jpg");
  console.log("Cron job executed at:", new Date().toLocaleString());
};

// Schedule the cron job to run every 5 minutes
cron.schedule("*/2 * * * *", task);

console.log("Cron job scheduled to run every 5 minutes.");
