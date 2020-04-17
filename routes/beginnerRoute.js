const mongoose = require('mongoose');

const Beginner = mongoose.model('beginners');

module.exports = (app) => {
  app.post('/api/challenges', async (req, res) => {
    const { title, question, pseudocode, soultions } = req.body;

    const beginner = new Beginner({
      title,
      question,
      pseudocode,
      soultions,
      dateCreated: Date.now()
    });

    const challenge = await beginner.save();
    res.send(challenge);
  });
}
