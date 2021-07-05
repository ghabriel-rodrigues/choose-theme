import axios from 'axios'

const axiosAPI = axios.create({
  baseURL: "http://localhost:3000/",//@TODO: it needs to be in a .env file
})

export default axiosAPI