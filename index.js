const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const earlyAccessRoutes = require('./routes/users');
require('dotenv').config(); // تحميل متغيرات البيئة

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


mongoose.connect('mongodb://54.87.27.217:27017/FikraMarket')
  .then(() => console.log('تم الاتصال بـ MongoDB'))
  .catch(err => console.error('خطأ في اتصال MongoDB:', err));


app.get('/', (req, res) => {
  res.send('Hello World');
});

// Routes

app.use('/api', earlyAccessRoutes);

// بدء الخادم
app.listen(PORT, () => {
  console.log(`الخادم يعمل على المنفذ ${PORT}`);
});
