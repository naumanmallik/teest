export default async function handler(req, res) {
  try {
    const result = await uploadCloudinary("input3.jpg");
    console.log("Cron job executed at:", new Date().toLocaleString());

    res.status(200).send("Cron job completed");
  } catch (error) {
    res.status(200).send("Cron job error");
  }
}
