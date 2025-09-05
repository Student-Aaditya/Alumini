const twilio = require("twilio");
const client = new twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

async function Sms(username, phoneNo) {
  try {
    const sms = await client.messages.create({
      body: `Hello ${username}, a new event has been created. Please check your Alumni Portal for details.`,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNo
    });
    console.log("SMS sent:", sms.sid);
  } catch (err) {
    console.log("SMS error:", err.message);
  }
}

module.exports = Sms;
