import axios from 'axios';
const baseUrl = '/api/blogs';
let token;

function setToken(auth) {
  token = `bearer ${auth}`;
}

function getAllBlogPosts() {
  return axios.get(baseUrl)
    .then((res) => res.data)
    .catch((error)=> console.log(error.response));
};

function createNewBlogPost(config) {
  const authToken = {
    headers: {Authorization: token},
  };
  return axios.post(baseUrl, config, authToken).then((res) => res.data);
};

function updateBlogPost(id, config) {
  const authToken = {
    headers: {Authorization: token},
  };
  return axios.put(`${baseUrl}/${id}`, config, authToken)
    .then((res)=> res.data);
};

function deleteBlogPost(id) {
  const authToken = {
    headers: {Authorization: token},
  };
  return axios.delete(`${baseUrl}/${id}`, authToken);
};

export default {
  getAllBlogPosts,
  createNewBlogPost,
  updateBlogPost,
  deleteBlogPost,
  setToken,
};
