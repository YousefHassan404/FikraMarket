const mongoose = require('mongoose');

const EarlyAccessUserSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  country:{
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  userType: {
    type: String,
    enum: ['investor', 'idea_owner', 'general'],
    required: true,
  },
  ideaCategory: {
    type: String,
    enum: ['entrepreneurship', 'tech', 'education', 'environment', 'other', null],
    default: null,
  },
  message: {
    type: String,
    default: '',
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

module.exports = mongoose.model('EarlyAccessUser', EarlyAccessUserSchema);
