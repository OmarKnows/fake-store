import { AxiosResponse } from 'axios';
import { api } from '@/utils/api';

const getProducts = async (): Promise<AxiosResponse> => {
	return await api.get('/products');
};

const getProduct = async (id: string) => {
	return await api.get(`products/${id}`);
};

const getCategories = async () => {
	return await api.get('/categories');
};

const getProductsInCategory = async (category: string) => {
	return await api.get(`/products?category[in]=${category}`);
};

const productServices = {
	getProducts,
	getProduct,
	getCategories,
	getProductsInCategory,
};
export default productServices;
