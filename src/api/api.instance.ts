import axios from 'axios';

/** дальше поменяется на хост бэка  * */
const API_HOST = 'http://localhost:5555';

export const axiosInstance = axios.create({
  baseURL: API_HOST,
});
