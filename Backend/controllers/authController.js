const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const RevokedToken = require("../models/revokedTokens");
const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: "Username already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, password: hashedPassword });
    await user.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Authentication failed" });
    }
    const token = jwt.sign({ userId: user._id }, "codecollab", {
      expiresIn: "1h",
    });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};
const logout = async (req, res) => {
  try {
    const token = req.header('Authorization');
    jwt.verify(token, 'Devnandan', async (err, decoded) => {
      if (err) {
        return res.status(401).json({ message: 'Invalid token.' });
      }
      const isTokenRevoked = await RevokedToken.exists({ token });
      if (isTokenRevoked) {
        return res.status(401).json({ message: 'Token already revoked.' });
      }
      await RevokedToken.create({ token });

      res.json({ message: 'Logged out successfully' });
    });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = { register, login,logout };
