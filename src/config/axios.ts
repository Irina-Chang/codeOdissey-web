import axios from "axios"


const {VITE_BASE_URL} = import.meta.env

export const api = axios.create({
    baseURL: VITE_BASE_URL
})

axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
  }, function (error) {
    console.log(error)
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });