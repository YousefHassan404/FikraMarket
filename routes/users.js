const express = require('express');
const router = express.Router();
const EarlyAccessUser = require('../models/Users');

router.post('/register', async (req, res) => {
  try {
    const { fullName,country, email, userType, ideaCategory, message } = req.body;

    const newUser = new EarlyAccessUser({
      fullName,
      country,
      email,
      userType,
      ideaCategory: userType === 'idea_owner' ? ideaCategory : null,
      message,
    });

    await newUser.save();
    res.status(201).json({ message: 'Thanks for joining Fikra Market. We will contact you soon!' });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ error: 'Email already registered.' });
    } else {
      res.status(500).json({ error: 'Server error' });
    }
  }
});

module.exports = router;
