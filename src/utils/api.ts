import axios from 'axios';
const BASE_URL = 'https://ecommerce.routemisr.com/api/v1';

const getToken = (): string | null => {
	return localStorage.getItem('token') || null;
};

const api = axios.create({
	baseURL: BASE_URL,
});

const apiPrivate = axios.create({
	baseURL: BASE_URL,
	headers: { token: getToken() },
});

export interface IApiResponse {
	message: string;
	statusMsg: string;
}

export { api, apiPrivate, getToken };
