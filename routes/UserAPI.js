require('dotenv/config');
const Router = require('express').Router();
const User = require('../models/User');

Router.get('/:username', async (req, res) => {
  try {
    User.findOne({username: req.params.username}).then(function (user) {
      res.json(user.savedShows);
      });
  } catch (err) {
    res.status(501);
    res.send('unexpected server error when getting users!');
  }
});

Router.post('/:username/show', function (req, res) {
  const savedShow = req.body;
  User.findOneAndUpdate(
    { username: req.params.username },
    { $addToSet: { savedShows: savedShow } },
    { new: true }
  )
    .then(function (dbUser) {
      res.json(dbUser);
    })
    .catch(function (err) {
      res.json(err);
    });
});

Router.post('/:username', async (req, res) => {
  try {
    const user = await User.create({ username: req.params.username });
    console.log('our post request for user is: ', user);
    res.status(201);
  } catch (err) {
    res.status(501);
    res.send('unexpected server error when posting a user!');
  }
});

module.exports = Router;
