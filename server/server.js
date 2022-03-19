const express = require('express');
const { Db } = require('mongodb');
const path = require('path');
const { errorHandler } = require('./middleware/errorMiddleware');

const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.use(require('./routes/api.js'));

// app.use(errorHandler);
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});
