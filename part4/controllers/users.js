const usersRouter = require('express').Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');


usersRouter.get('/', async (req, res) => {
  const users = await User.find({})
    .populate('blogs', {title: 1, author: 1, url: 1, likes: 1});
  res.status(200).json(users);
});

usersRouter.post('/', async (req, res) => {
  const {username, name, password} = req.body;
  if (!password || password.length < 3) {
    res.status(400).json({error: 'Password required - longer than 3 chars'});
  } else {
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
      username,
      name,
      passwordHash,
    });

    const savedUser = await user.save();
    res.status(201).json(savedUser);
  };
});

module.exports = usersRouter;
