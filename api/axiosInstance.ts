import Axios from 'axios';

let urls = {
  test: `http://localhost:3000`,
  development: 'https://smartdocsapi.azurewebsites.net/api',
  production: 'https://smartdocsapi.azurewebsites.net/api',
};

const axiosInstance = Axios.create({
  baseURL: urls[process.env.NODE_ENV],
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
