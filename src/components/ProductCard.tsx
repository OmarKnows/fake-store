import { IProduct } from '@/redux/products/productsModel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import React from 'react';
import { Link } from 'react-router-dom';

interface IProductCardProps {
	product: IProduct;
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
	return (
		<div key={product.id}>
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
						<p className='truncate'>Description: {product?.description}</p>
					</CardDescription>
					<CardFooter>
						<p>Price: ${product?.price}</p>
					</CardFooter>
				</Card>
			</Link>
		</div>
	);
};

export default ProductCard;
