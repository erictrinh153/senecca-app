const router = require("express").Router();
const User = require("../models/User");
const Crypto = require("crypto-js");
const jwt = require("jsonwebtoken");

// REGISTER

router.post("/register", async (req, res) => {
  const newUser = new User({
    email: req.body.email,
    password: Crypto.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
    name: req.body.name,
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    const encrypted = Crypto.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = encrypted.toString(Crypto.enc.Utf8);

    (!user ||
      originalPassword !== req.body.password) &&
        res.status(401).json({message:"Wrong password or email address"});
    
    const accessToken = jwt.sign({ id: user._id, email: user.email, name: user.name }, process.env.SECRET_KEY, {
      expiresIn: 3600 ,
    });

    const { password, ...info } = user._doc;

    res.status(200).json({...info, accessToken});
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
