import { AxiosResponse } from 'axios';
import { apiPrivate } from '@/utils/api';

const getCart = async (): Promise<AxiosResponse> => {
	return await apiPrivate.get('/cart');
};

const addToCart = async (productId: string): Promise<AxiosResponse> => {
	return await apiPrivate.post('/cart', {
		productId,
	});
};

const updateCartProductQuantity = async (productId: string, count: number): Promise<AxiosResponse> => {
	return await apiPrivate.post(`/cart${productId}`, {
		count,
	});
};

const removeFromCart = async (productId: string): Promise<AxiosResponse> => {
	return await apiPrivate.delete(`/cart/${productId}`);
};

const clearCart = async (): Promise<AxiosResponse> => {
	return await apiPrivate.delete('/cart/');
};

const cartServices = {
	getCart,
	addToCart,
	removeFromCart,
	clearCart,
	updateCartProductQuantity,
};
export default cartServices;
