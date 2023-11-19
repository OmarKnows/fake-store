export interface IProduct {
	sold: number;
	images: string[];
	subcategory: Subcategory[];
	ratingsQuantity: number;
	_id: string;
	title: string;
	slug: string;
	description: string;
	quantity: number;
	price: number;
	imageCover: string;
	category: ICategory;
	brand: Brand;
	ratingsAverage: number;
	createdAt: Date;
	updatedAt: Date;
	reviews: [];
}

export interface ICategory {
	_id: string;
	name: string;
	slug: string;
	image: string;
	createdAt?: Date;
	updatedAt?: Date;
}

export interface Subcategory {
	_id: string;
	name: string;
	slug: string;
	category: string;
}

export interface Brand {
	_id: string;
	name: string;
	slug: string;
	image: string;
}

export type Product = Omit<IProduct, 'id, rating'>;
