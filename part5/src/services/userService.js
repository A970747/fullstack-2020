import axios from 'axios';
const baseUrl = '/api/login';

function addNewUser() {
  return axios.post(baseUrl).then((res)=> res.data);
}

function userLogin(credentials) {
  console.log(credentials);
  return axios.post(baseUrl, credentials).then((res)=> res.data);
}

export default {addNewUser, userLogin};
