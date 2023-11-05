import { AxiosResponse } from 'axios';
import api from '@/lib/api';

const getProducts = async (): Promise<AxiosResponse> => {
	return await api.get('products');
};

const productServices = {
	getProducts,
};
export default productServices;
