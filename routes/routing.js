const express = require('express');
const router = express.Router();
const path = require('path');
router.get('/chat', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/chat.html'));
});
router.get('/customer-care', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/customercare.html'));
});
router.get('/chat-with-all', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/combined.html'));
});
module.exports = router;
