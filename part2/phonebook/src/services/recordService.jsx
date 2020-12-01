import axios from 'axios';
const baseUrl = 'http://localhost:3001/records';


const getRecords = () => {
  return axios.get(baseUrl).then(response => response.data);
}

const createRecord = newRecord => { 
  return axios.post(baseUrl, newRecord).then(response => response.data)
}

const updateRecord = () => {
  return null
}

const deleteRecord = (id) => {
  return (axios.delete(baseUrl + `/${id}`));
}

export default { getRecords, createRecord, updateRecord, deleteRecord };