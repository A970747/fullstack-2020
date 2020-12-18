const Blog = require('../models/blog');
const User = require('../models/user');

const initialBlogPosts = [
  {
    title: 'First blog',
    author: 'Matt Jackson',
    url: 'www.pretendURL',
    likes: 5,
  },
  {
    title: 'Second blog',
    author: 'Jimmy Davidson',
    url: 'www.pretendURL',
    likes: 10,
  },
];

const newBlogPost = {
  title: 'Breaking Bad',
  author: 'Heisenberg',
  url: 'www.pretendURL',
  likes: 20,
};

const blogPostNoLikes = {
  title: 'Fourth blog',
  author: 'Soul Goodman',
  url: 'www.pretendURL',
};

const blogPostNoTitle= {
  author: 'Testing NoTitleURL',
  url: 'www.pretendURL',
};

const blogPostNoUrl = {
  title: 'Test blog',
  author: 'Testing NoTitleURL',
};

const updateFirstBlog = {
  title: 'Updated first blog',
  author: 'A different Author',
  url: 'updated URL',
  likes: 100,
};

const nonExistingId = async () => {
  const blog = new Blog({content: 'willremovethissoon', date: new Date()});
  await blog.save();
  await blog.remove();

  return blog._id.toString();
};

const blogsInDb = async () => {
  const blogs = await Blog.find({});
  return blogs.map((blog) => blog.toJSON());
};

const usersInDb = async () => {
  const users = await User.find({});
  return users.map((users) => users.toJSON());
};

module.exports = {
  initialBlogPosts,
  newBlogPost,
  blogPostNoLikes,
  blogPostNoTitle,
  blogPostNoUrl,
  updateFirstBlog,
  nonExistingId,
  blogsInDb,
  usersInDb,
};
