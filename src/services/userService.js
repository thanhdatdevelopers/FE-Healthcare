import { stringify } from 'react-auth-wrapper/helpers';
import axios from '../axios'

const handleLoginApi = (userEmail, userPassword) => {
  return axios.post('/api/login', {email: userEmail, password: userPassword});
}

const getAllUsers = (inputId) =>{
  return axios.get(`/api/get-all-users?id=${inputId}`)
}

const createNewUserService =(data) =>{
  console.log('check data', data)
  return axios.post('/api/create-new-user', data)
}

const deleteUserService = (userId) => {
  // return axios.delete('/api/delete-user', stringify)
  return axios.delete('/api/delete-user', {
    data: {
      id: userId
    }
  })

}

export { handleLoginApi, getAllUsers, createNewUserService, deleteUserService}