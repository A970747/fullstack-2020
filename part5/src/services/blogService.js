const baseUrl = 'api/blogs';

function getAllBlogPosts() {
  return axios.get(baseUrl).then((res) => res.data);
};

function createNewBlogPost() {
  return axios.post(baseUrl).then((res) => res.data);
};

function updateBlogPost() {
  return axios.put(`${baseUrl}/${id}`).then((res)=> res.data);
};

function deleteRecord() {
  return axios.delete(`${baseUrl}/${id}`);
};

export default {
  getAllBlogPosts,
  createNewBlogPost,
  updateBlogPost,
  deleteRecord,
};
