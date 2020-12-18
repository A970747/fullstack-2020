const blogRouter = require('express').Router();
const Blog = require('../models/blog');

blogRouter.get('/', async (req, res) => {
  const blogs = await Blog.find({});
  res.json(blogs);
});

blogRouter.post('/', async (req, res, next) => {
  const blog = new Blog(req.body);

  const savedBlog = await blog.save();
  res.status(201).json(savedBlog);
});

blogRouter.get('/:id', async (req, res) => {
  const singleBlog = await Blog.findById(req.params.id);
  res.status(200).json(singleBlog);
});

blogRouter.delete('/:id', async (req, res) => {
  const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
  res.status(204).json(deletedBlog);
});

module.exports = blogRouter;
