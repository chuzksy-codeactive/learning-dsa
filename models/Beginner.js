const mongoose = require('mongoose');
const { Schema } = mongoose;

const beginnerSchema = new Schema({
  title: String,
  question: String,
  pseudocode: [String],
  solutions: [String],
  dateCreated: Date
});

mongoose.model('beginners', beginnerSchema);
