const dummy = (blogs) => {
  // ...
  return 1;
};

const totalLikes = (blogs) => {
  if (blogs.length === 0) return 0;

  return blogs.reduce((sum, blog) => {
    return sum += blog.likes;
  }, 0);
};

const favoriteBlog = (blogs) => {
  return blogs.reduce((mostLikesBlog, currentBlog) => {
    if (mostLikesBlog.likes < currentBlog.likes) return currentBlog;
    return mostLikesBlog;
  });
};

const mostBlogs = (blogs) => {
  const blogsByAuthor = blogs.reduce((collection, blog) => {
    if (blog.author in collection) {
      return {...collection, [blog.author]: collection[blog.author] + 1};
    };
    return {...collection, [blog.author]: 1};
  }, {});

  const formattedBlog = Object.entries(blogsByAuthor)
    .reduce((mostBlogsAuthor, currentAuthor) => {
      if (mostBlogsAuthor[1] > currentAuthor[1]) {
        return mostBlogsAuthor;
      };
      return currentAuthor;
    });

  return {author: formattedBlog[0], blogs: formattedBlog[1]};
};

const mostLikes = (blogs) => {
  const likesByAuthor = blogs.reduce((collection, blog) => {
    if (blog.author in collection) {
      return {
        ...collection,
        [blog.author]: collection[blog.author] + blog.likes,
      };
    };
    return {...collection, [blog.author]: blog.likes};
  }, {});

  const mostLiked = Object.entries(likesByAuthor)
    .reduce((mostBlogsAuthor, currentAuthor) => {
      if (mostBlogsAuthor[1] > currentAuthor[1]) {
        return mostBlogsAuthor;
      };
      return currentAuthor;
    });

  return {author: mostLiked[0], likes: mostLiked[1]};
};


module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
