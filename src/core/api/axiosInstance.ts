import axios from 'axios';
import { getUrl } from './utils';

const host = process.env.REACT_APP_ENDPOINT;
const app = process.env.REACT_APP_REST_APPLICATION;
const protocol = process.env.REACT_APP_REST_PROTOCOL;
const baseUrl = getUrl(host, app, protocol);

const axiosInstance = axios.create({
  baseURL: `${baseUrl}`,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Cache-Control': 'no-store, no-cache, must-revalidate',
    Pragma: 'no-cache',
  },
});

export default axiosInstance;
