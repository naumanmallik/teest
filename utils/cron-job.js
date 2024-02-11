// const cron = require("node-cron");
const { uploadCloudinary } = require("./uploadCloudinary.util");

// const task = async () => {
//   try {
//     // const result = await uploadCloudinary("input3.jpg");
//     console.log("Cron job executed at:", new Date().toLocaleString());
//   } catch (error) {
//     console.log("error", error);
//   }
// };

// // Schedule the cron job to run every 5 minutes
// cron.schedule("*/2 * * * *", task);

// console.log("Cron job scheduled to run every 5 minutes.");

export default async function handler(req, res) {
  console.log("Cron job executed at:", new Date().toLocaleString());
  const result = await uploadCloudinary("input3.jpg");

  res.status(200).send("Cron job completed");
}
