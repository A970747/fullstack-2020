const supertest = require('supertest');
const mongoose = require('mongoose');
const {
  usersInDb,
} = require('./test_helper');
const User = require('../models/user');
const bcrypt = require('bcrypt');
const app = require('../app');
const api = supertest(app);
const config = require('../utils/config');

beforeEach(async () => {
  await mongoose.connect(config.URI,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
  );
  await User.deleteMany({});

  const passwordHash = await bcrypt.hash('secretPassword', 10);
  const user = new User({username: 'initial user', passwordHash});

  await user.save();
});

describe('with one user in db', ()=> {
  test('gets all users', async () => {
    await api
      .get('/api/users')
      .expect(200);
  });

  test('creation with new user succeeds', async () => {
    const usersAtStart = await usersInDb();

    const newUser = {
      username: 'mjackson',
      name: 'Matt Jackson',
      password: 'superSecret',
    };

    await api
      .post('/api/users')
      .send(newUser)
      .expect(201)
      .expect('Content-Type', /application\/json/);

    const usersAtEnd = await usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1);

    const usernames = usersAtEnd.map((user) => user.username);
    expect(usernames).toContain('mjackson');
  });

  test('create fails w proper status & message if user taken', async () => {
    const usersAtStart = await usersInDb();

    const newUser = {
      username: 'initial user',
      name: 'Another name',
      password: 'topSecret',
    };

    const result = await api
      .post('/api/users')
      .send(newUser)
      .expect(400)
      .expect('Content-Type', /application\/json/);

    expect(result.body.error).toContain('`username` to be unique');

    const usersAtEnd = await usersInDb();
    expect(usersAtEnd).toHaveLength(usersAtStart.length);
  });
});


afterAll(async () => {
  await mongoose.connection.close();
});
