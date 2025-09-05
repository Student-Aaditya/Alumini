const User = require("../Model/user.models.js");
const Sms = require("../Service/twillio.js");
const sendEmail = require("../Service/email.js");
const  imageUpload  = require("../Service/cloudConfig.js");
const upload=require("../Service/cloudConfig.js");

const controller = {
    signUp: async (req, res) => {
        let { username, email, password, role } = req.body;
        const newUser = new User({ email, username, role });
        const register = await User.register(newUser, password);
        console.log(register);
        res.status(200).json({ msg: "sign up " })
    },
   logIn: async (req, res) => {
  try {
    const { email, password } = req.body;

    // Passport-local-mongoose authenticate
    const auth = User.authenticate();

    auth(email, password, (err, user, options) => {
      if (err) {
        return res.status(500).json({ msg: "Error", error: err.message });
      }

      if (!user) {
        return res.status(401).json({ msg: options?.message || "Invalid credentials" });
      }

      res.status(200).json({
        msg: "Login successful",
        user: {
          id: user._id,
          username: user.username,
          email: user.email,
          role: user.role,
        },
      });
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Server error", error: err.message });
  }
},

    smsRoute: async (req, res) => {
        let { username, phone } = req.body;
        await Sms(username, phone);
    },
    emailRoute: async (req, res) => {
        await sendEmail();
        res.status(200).json({ msg: "data send successful" });
    },
    uploadImage: async (req, res) => {
      res.json({ url: req.file.path });

        }
}

module.exports = controller;