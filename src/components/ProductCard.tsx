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
					<div className='h-64 flex justify-center'>
						<img className='h-full' src={product.image} />
					</div>
				</CardContent>
				<CardHeader>
					<h2 className='truncate'>{product?.title}</h2>
				</CardHeader>
				<CardDescription>
					<p className='truncate'>{product?.description}</p>
				</CardDescription>
				<CardFooter className='flex justify-between'>
					<ProductRating value={product.rating} />
					<p>Price: ${product?.price}</p>
				</CardFooter>
			</Card>
		</Link>
	);
};

export default ProductCard;
