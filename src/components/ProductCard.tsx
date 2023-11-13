import { IProduct } from '@/redux/products/productsModel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import React from 'react';
import { Link } from 'react-router-dom';
import ProductRating from './ProductRating';

interface IProductCardProps {
	product: IProduct;
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
	return (
		<Link to={`${product.id}`}>
			<Card>
				<CardContent>
					<div className='h-64 w-full flex text-center items-center justify-center overflow-hidden rounded-xl'>
						<img className='h-full w-full object-cover' src={product.image} />
					</div>
				</CardContent>
				<CardHeader>
					<div className='flex justify-between'>
						<h2 className='truncate'>{product?.title}</h2>
					</div>
				</CardHeader>
				<CardDescription className='truncate'>{product?.description}</CardDescription>
				<CardFooter className='flex justify-between'>
					<ProductRating value={product.rating} />
					<div className='font-semibold'>Price: ${product?.price}</div>
				</CardFooter>
			</Card>
		</Link>
	);
};

export default ProductCard;
