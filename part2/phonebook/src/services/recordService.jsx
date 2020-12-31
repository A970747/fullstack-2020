import axios from 'axios';
const baseUrl = 'api/records';


const getRecords = () => {
  return axios.get(baseUrl).then(response => response.data)
}

const createRecord = newRecord => { 
  return axios.post(baseUrl, newRecord).then(response => response.data)
}

const updateRecord = (id, newData) => {
  return axios.put(`${baseUrl}/${id}`, newData).then(response => response.data)
}

const deleteRecord = (id) => {
  return axios.delete(`${baseUrl}/${id}`);
}

export default { getRecords, createRecord, updateRecord, deleteRecord };