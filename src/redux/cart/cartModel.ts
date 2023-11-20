import { IProduct } from '../products/productsModel';

export interface ICartItem {
	count: number;
	price: number;
	product: IProduct;
	_id: string;
}
