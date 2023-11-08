export interface Rating {
	count: number;
	rate: number;
}

export interface IProduct {
	id: number;
	title: string;
	price: number;
	description: string;
	image: string;
	category: string;
	rating: Rating;
}

export type Product = Omit<IProduct, 'id, rating'>;
