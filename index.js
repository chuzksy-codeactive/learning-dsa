const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const keys = require('./config/keys');

require('./models/Beginner');

const app = express();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect(keys.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }, (e) => console.log(e));

require('./routes/beginnerRoute')(app);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
