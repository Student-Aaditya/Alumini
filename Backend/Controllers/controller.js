const User = require("../Model/user.models.js");
const Sms = require("../Service/twillio.js");
const sendEmail = require("../Service/email.js");
const  imageUpload  = require("../Service/cloudConfig.js");
const upload=require("../Service/cloudConfig.js");

const controller = {
   signUp: async (req, res) => {
    try {
      const {username, email, password, role } = req.body;
      const newUser = new User({username, email, role });
      const registeredUser = await User.register(newUser, password);

      res.status(200).json({
        msg: "Signup successful",
        user: {
          id: registeredUser._id,
          email: registeredUser.email,
          role: registeredUser.role,
        },
      });
    } catch (err) {
      console.error("Signup Error:", err.message);
      res.status(500).json({ msg: "Signup failed", error: err.message });
    }
  },
  logIn: async (req, res) => {
  try {
    const { email, password, role } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ msg: "Invalid email" });
    }

    user.authenticate(password, (err, authenticatedUser, passwordError) => {
      if (err) return res.status(500).json({ msg: "Server error" });
      if (!authenticatedUser) {
        return res.status(400).json({ msg: "Invalid password" });
      }

      if (user.role.toLowerCase() !== role.toLowerCase()) {
        return res.status(400).json({ msg: "Invalid role selected" });
      }

      res.status(200).json({
        msg: "Login successful",
        user: {
          id: user._id,
          email: user.email,
          role: user.role,
        },
      });
    });
  } catch (err) {
    console.error(" Login Error:", err.message);
    res.status(500).json({ msg: "Server error" });
  }
},


    smsRoute: async (req, res) => {
        let { username, phone } = req.body;
        await Sms(username, phone);
    },
    emailRoute: async (req, res) => {
    const { email, username } = req.body;

    const response = await sendEmail(
      email,
      "Welcome to CampusConnect ",
      `Hi ${username}, thanks for signing up.`,
      `<h2>Hi ${username},</h2><p>Welcome to <b>CampusConnect</b> 🚀</p>`
    );

    if (response.success) {
      res.status(200).json({ msg: "Email sent successfully!" });
    } else {
      res.status(500).json({ msg: "Failed to send email", error: response.error });
    }
  },
    uploadImage: async (req, res) => {
      res.json({ url: req.file.path });

        },
   createEvent:async(req,res)=>{
    try {
    const { title, date, time, registered } = req.body;

    const newEvent = new Event(req.body);
    await newEvent.save();

    const alumniList = await Alumni.find({ userId: { $in: registered } });

    for (const alumni of alumniList) {
      if (alumni.phone) {
        await Sms(alumni.name, alumni.phone);  
      }
    }

    res.json({ success: true, message: "Event created & SMS sent to alumni" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
}
 
   
}

module.exports = controller;