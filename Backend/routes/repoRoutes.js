const express = require('express');
const repoController = require('../controllers/repoController');
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

// Protect routes with authentication middleware
router.use(authMiddleware);

router.post('/create', repoController.createRepo);
router.delete('/:repoId', repoController.deleteRepo);

module.exports = router;
