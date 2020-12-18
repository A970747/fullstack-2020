const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title required'],
  },
  author: String,
  url: {
    type: String,
    required: [true, 'URL required'],
  },
  likes: {
    type: Number,
    default: 0,
  },
});

blogSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString(); // eslint-disable-line
    delete returnedObject._id; // eslint-disable-line
    delete returnedObject.__v; // eslint-disable-line
  },
});

module.exports = mongoose.model('Blog', blogSchema);
