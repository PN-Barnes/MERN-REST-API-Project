const mongoose = require('mongoose');
const colors = require('colors');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/tidydb', {
  useNewUrlParser: true,
});

module.exports = mongoose.connection;
