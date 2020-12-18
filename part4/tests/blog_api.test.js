const supertest = require('supertest');
const mongoose = require('mongoose');
const {
  initialBlogPosts,
  newBlogPost,
  blogPostNoLikes,
  blogPostNoTitle,
  blogPostNoUrl,
  updateFirstBlog,
  blogsInDb,
} = require('./test_helper');
const app = require('../app');
const api = supertest(app);
const Blog = require('../models/blog');

beforeEach(async () => {
  await Blog.deleteMany({});

  const blogObjects = initialBlogPosts.map((blog) => new Blog(blog));
  const blogPromiseArray = blogObjects.map((blog) => blog.save());
  await Promise.all(blogPromiseArray);
});

describe('checking db when we have initial blogs', () => {
  test('blogs are returned as json', async () => {
    await api
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/);
  });

  test('there are two blogs intially in test', async () => {
    const res = await blogsInDb();

    expect(res).toHaveLength(initialBlogPosts.length);
  });

  test('check if ID is being returned', async () => {
    const blogs = await blogsInDb();
    expect(blogs[0].id).toBeDefined();
  });

  test('the first blog title is', async () => {
    const res = await blogsInDb();

    const contents = res.map((res) => res.title);
    expect(contents).toContain('First blog');
  });
});

describe('adding new blogs', () => {
  test('a new blog post can be added', async () => {
    await api
      .post('/api/blogs')
      .send(newBlogPost)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const res = await blogsInDb();
    const contents = res.map((result) => result.title);

    expect(res).toHaveLength(initialBlogPosts.length + 1);
    expect(res[initialBlogPosts.length].title).toEqual(newBlogPost.title);
    expect(contents).toContain('Breaking Bad');
  });

  test('blog without content cannot be posted', async () => {
    await api
      .post('/api/blogs')
      .send({});

    const res = await blogsInDb();
    expect(res).toHaveLength(initialBlogPosts.length);
  });

  test('blog without Title and/or URL gives status 400', async () => {
    await api
      .post('/api/blogs')
      .send(blogPostNoTitle)
      .expect(400);

    await api
      .post('/api/blogs')
      .send(blogPostNoUrl)
      .expect(400);
  });

  test('blog likes property default is 0', async () => {
    await api
      .post('/api/blogs')
      .send(blogPostNoLikes)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const res = await blogsInDb();

    expect(res[initialBlogPosts.length].likes).toBe(0);
  });
});

describe('viewing specific blogs', () => {
  test('get info for unique blog by id', async () => {
    const blogs = await blogsInDb();
    const firstBlog = blogs[0];

    const resultBlog = await api
      .get(`/api/blogs/${firstBlog.id}`)
      .expect(200)
      .expect('Content-Type', /application\/json/);

    /* May need this if return contains an object, eg. Date.
    const processBlog = JSON.parse(JSON.stringify(firstBlog));  */
    expect(resultBlog.body).toEqual(firstBlog);
  });

  test('fails with status code 404 if id doesnt exist', async () => {
    const validObjectID = '5e63c3a5e4232e4cd0274ac2';
    await api
      .get(`/api/blogs/${validObjectID}`)
      .expect(404);
  });
});

describe('testing put requests', () => {
  test('blog can be updated', async () => {
    const initialBlogs = await blogsInDb();
    const firstBlog = initialBlogs[0];

    await api
      .put(`/api/blogs/${firstBlog.id}`)
      .send(updateFirstBlog)
      .expect(200);

    const updatedBlogs = await blogsInDb();
    const blogsMappedByTitle = updatedBlogs.map((blog) => blog.title);
    expect(blogsMappedByTitle).toContain('Updated first blog');
  });
});

describe('deletion of a blog', () => {
  test('blog can be deleted', async () => {
    const initialBlogs = await blogsInDb();
    const firstBlog = initialBlogs[0];

    await api
      .delete(`/api/blogs/${firstBlog.id}`)
      .expect(204);

    const afterDeleteBlogs = await blogsInDb();
    expect(afterDeleteBlogs).toHaveLength(initialBlogPosts.length - 1);

    const contents = afterDeleteBlogs.map((blog) => blog.title);
    expect(contents).not.toContain(firstBlog.title);
  });

  test('fails with status 404 if deleted passed a valid, non-existing id',
    async () => {
      const validObjectID = '5e63c3a5e4232e4cd0274ac2';
      await api
        .delete(`/api/blogs/${validObjectID}`)
        .expect(404);
    });
});

afterAll(() => {
  mongoose.connection.close();
});
