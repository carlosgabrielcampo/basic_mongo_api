const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://carlos:FOWSy4coOSGOo128@cluster0.jffxit6.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });