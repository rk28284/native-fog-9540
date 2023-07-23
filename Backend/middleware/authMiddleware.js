const jwt = require('jsonwebtoken');
const RevokedToken = require("../models/revokedTokens");

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header('Authorization')
    if (!token) {
      return res.status(401).json({ message: 'Authorization token not found' });
    }
    // Check if the token is blacklisted
    const isBlacklisted = await RevokedToken.exists({ token });
    if (isBlacklisted) {
      return res.status(401).json({ message: "Token revoked. Please log in again."});
    }
    // Verify the access token
    const decoded = jwt.verify(token, 'codecollab');
    req.user = { userId: decoded.userId };
    next();
  } catch (error) {
    res.status(401).json({ message: 'Invalid token' });
  }
};

module.exports = authMiddleware;
