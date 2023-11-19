import axios from 'axios';

const api = axios.create({
	// baseURL: 'https://fakestoreapi.com/',
	baseURL: 'https://ecommerce.routemisr.com/api/v1',
});

export interface IApiResponse {
	message: string;
	statusMsg: string;
}

export default api;
