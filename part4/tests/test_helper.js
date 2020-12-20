const Blog = require('../models/blog');
const User = require('../models/user');
const userId = '5fdf86fb33612a3f2adbdd59';

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
  title: 'Breaking Bad',
  author: 'Heisenberg',
  url: 'www.pretendURL',
  likes: 20,
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
  nonExistingId,
  blogsInDb,
  usersInDb,
};
