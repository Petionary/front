import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const axiosConfig = {
	baseURL: BASE_URL,
	timeout: 1000,
};

const axiosInstance = axios.create(axiosConfig);

export default axiosInstance;
