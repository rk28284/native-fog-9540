const express = require('express');
const fileController = require('../controllers/fileController');
const router = express.Router();
const authMiddleware = require("../middleware/authMiddleware");

// Protect routes with authentication middleware
router.use(authMiddleware);

router.post('/add', fileController.addFile);
router.delete('/:fileId', fileController.deleteFile);
router.get('/:fileId', fileController.getFileContent);
router.put('/:fileId', fileController.updateFileContent);

module.exports = router;
