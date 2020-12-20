const blogsRouter = require('express').Router();
const Blog = require('../models/blog');
const User = require('../models/user');
const jwt = require('jsonwebtoken');

const getTokenFrom = (req) => {
  const authorization = req.get('authorization');
  if (authorization && authorization.toLowerCase().startsWith('bearer ')) {
    return authorization.substring(7);
  }
  return null;
};

blogsRouter.get('/', async (req, res) => {
  const blogs = await Blog.find({})
    .populate('user', {username: 1, name: 1});
  res.status(200).json(blogs);
});

blogsRouter.post('/', async (req, res) => {
  const token = getTokenFrom(req);
  const decodedToken = jwt.verify(token, process.env.SECRET);
  if (!token || !decodedToken.id) {
    return res.status(401).json({error: 'invalid username or password'});
  }
  const user = await User.findById(decodedToken.id);
  const blogs = new Blog({...req.body, user: user._id});

  const savedBlog = await blogs.save();
  user.blogs = user.blogs.concat(savedBlog._id);
  await user.save();

  res.status(201).json(savedBlog);
});

blogsRouter.get('/:id', async (req, res, next) => {
  const singleBlog = await Blog.findById(req.params.id);

  if (singleBlog) {
    res.status(200).json(singleBlog);
  } else {
    next();
  }
});

blogsRouter.put('/:id', async (req, res, next) => {
  const blog = {...req.body};
  const updatedBlog = await Blog
    .findByIdAndUpdate(req.params.id, blog, {new: true});

  if (updatedBlog) {
    res.status(200).json(updatedBlog);
  } else {
    next();
  }
});

blogsRouter.delete('/:id', async (req, res, next) => {
  const deletedBlog = await Blog.findByIdAndDelete(req.params.id);

  if (deletedBlog) {
    res.status(204).json(deletedBlog);
  } else {
    next();
  };
});

module.exports = blogsRouter;
