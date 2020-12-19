const usersRouter = require('express').Router();
const User = require('../models/user');
const Blog = require('../models/blog');
const bcrypt = require('bcrypt');


usersRouter.get('/', async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
});

usersRouter.post('/', async (req, res) => {
  const {username, name, password} = req.body;
  const saltRounds = 10;
  const passwordHash = await bcrypt.hash(password, saltRounds);

  const user = new User({
    username,
    name,
    passwordHash,
  });

  const savedUser = await user.save();
  res.status(201).json(savedUser);
});

module.exports = usersRouter;
