const baseUrl = 'api/users';

function getAllUsers() {
  return axios.get(baseUrl).then((res)=> res.data);
}

function addNewUser() {
  return axios.post(baseUrl).then((res)=> res.data);
}

function userLogin(credentials) {
  return axios.post(baseUrl, credentials).then((res)=> res.data);
}

export default {getAllUsers, addNewUser, userLogin};
