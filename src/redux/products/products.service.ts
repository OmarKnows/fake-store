import { AxiosResponse } from 'axios';
import { IProduct, Product } from './productsModel';
import api from '@/utils/api';

const getProducts = async (): Promise<AxiosResponse> => {
	return await api.get('products');
};

const getProduct = async (id: string) => {
	return await api.get(`products/${id}`);
};

const addProduct = async (product: Product) => {
	return await api.post('products', {
		...product,
	});
};

const updateProduct = async (product: IProduct) => {
	return await api.put(`products/${product.id}`, {
		...product,
	});
};

const deleteProduct = async (id: string) => {
	return await api.delete(`products/${id}`);
};

const getCategories = async () => {
	return await api.get('products/categories');
};

const productServices = {
	getProducts,
	getProduct,
	addProduct,
	updateProduct,
	deleteProduct,
	getCategories,
};
export default productServices;
