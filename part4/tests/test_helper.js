const Blog = require('../models/blog');
const User = require('../models/user');
const userId = '5fe4ff2cbeadf3428d657fe6';
const tokenForTests = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkRlZmF1bHQgVXNlcjEiLCJpZCI6IjVmZTRmZjJjYmVhZGYzNDI4ZDY1N2ZlNiIsImlhdCI6MTYwODg0NDY0NH0.xj2K3KFYJW5dfsfpxDQsTtTJTLvhHmeANqWqs08SwkA'

const initialBlogPosts = [
  {
    title: 'First blog',
    author: 'Matt Jackson',
    url: 'www.pretendURL',
    likes: 5,
    _id: '5fe506f37d8d754a61857de1',
    user: userId,
  },
  {
    title: 'Second blog',
    author: 'Jimmy Davidson',
    url: 'www.pretendURL',
    likes: 10,
    _id: '5fe506f37d8d754a61857de2',
    user: userId,
  },
];

const initialUsers = [
  {
    username: 'Default User1',
    name: 'User1',
    password: 'uruguay',
  },
  {
    username: 'Default User2',
    name: 'User2',
    password: 'zimbabwe',
  },
];

const userShortPassword = {
  username: 'Password Tooshort',
  name: 'SPword',
  password: '12',
};

const userShortName = {
  username: 'Sh',
  name: 'SPword',
  password: 'OkayPass',
};

const userNoName= {
  name: 'SPword',
  password: 'OkayPass',
};

const newBlogPost = {
  title: 'Third blog',
  author: 'Queen Elizabeth',
  url: 'www.fakeurl.com',
  likes: 0,
  userid: userId,
};

const blogPostNoLikes = {
  title: 'Fourth blog',
  author: 'Soul Goodman',
  url: 'www.pretendURL',
  userid: userId,
};

const blogPostNoTitle= {
  author: 'Testing NoTitleURL',
  url: 'www.pretendURL',
  userid: userId,
};

const blogPostNoUrl = {
  title: 'Test blog',
  author: 'Testing NoTitleURL',
  userid: userId,
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
  initialUsers,
  userShortPassword,
  userShortName,
  userNoName,
  newBlogPost,
  blogPostNoLikes,
  blogPostNoTitle,
  blogPostNoUrl,
  updateFirstBlog,
  tokenForTests,
  nonExistingId,
  blogsInDb,
  usersInDb,
};
