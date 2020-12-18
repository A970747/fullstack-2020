const supertest = require('supertest');
const mongoose = require('mongoose');
const {usersInDb} = require('./test_helper');
const bcrypt = require('bcrypt');
const app = require('../app');
const api = supertest(app);
const User = require('../models/user');

beforeEach(async () => {
  console.log('fine in beforeEach');
  await User.deleteMany({});

  const passwordHash = await bcrypt.hash('secretPassword', 10);
  const user = new User({username: 'initial user', passwordHash});

  await user.save();

});

describe('with one user in db', ()=> {
  console.log('fine here');

  test('creation with new user succeeds', async () => {
    console.log('fine here again');
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
  console.log('fine here after');
});

console.log('outside fine here');
