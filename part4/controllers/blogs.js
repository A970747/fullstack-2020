const blogsRouter = require('express').Router();
const Blog = require('../models/blog');

blogsRouter.get('/', async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

blogsRouter.post('/', async (req, res) => {
  const blog = new Blog(req.body);

  const savedBlog = await blog.save();
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
