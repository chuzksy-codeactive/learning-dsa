const mongoose = require('mongoose');

const Beginner = mongoose.model('beginners');

module.exports = (app) => {
  app.post('/api/beginners/challenges', async (req, res) => {
    const { title, question, pseudocode, solutions } = req.body;

    const beginner = new Beginner({
      title,
      question,
      pseudocode,
      solutions,
      dateCreated: Date.now()
    });

    const challenge = await beginner.save();
    res.send(challenge);
  });

  app.get('/api/beginners/challenges', (req, res) => {
    res.send({ title: 'monkey' });
  });
}
