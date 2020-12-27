import axios from 'axios';
const baseUrl = '/api/blogs';
let token;

function setToken(auth) {
  token = `bearer ${auth}`;
}

function getAllBlogPosts() {
  return axios.get(baseUrl).then((res) => res.data);
};

function createNewBlogPost(config) {
  const authToken = {
    headers: {Authorization: token},
  };
  return axios.post(baseUrl, config, authToken).then((res) => res.data);
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
  setToken,
};
