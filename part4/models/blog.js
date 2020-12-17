const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number,
});

recordSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString(); // eslint-disable-line
    delete returnedObject._id; // eslint-disable-line
    delete returnedObject.__v; // eslint-disable-line
  },
});

module.exports = mongoose.model('Blog', blogSchema);
