import { IProduct } from '@/redux/products/productsModel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import React from 'react';
import { Link } from 'react-router-dom';

interface IProductCardProps {
	product: IProduct;
}

const ProductCard: React.FC<IProductCardProps> = ({ product }) => {
	return (
		<Link to={`${product.id}`}>
			<Card className='h-[374px]'>
				<CardContent className='flex justify-center'>
					<div className='h-[264px] w-[264px] overflow-hidden '>
						<img className='h-full w-full object-cover' src={product.image} />
					</div>
				</CardContent>
				<CardHeader className='mt-3 text-center font-semibold text-lg'>
					<p className='truncate '>{product?.title}</p>
				</CardHeader>
				<CardDescription className='truncate font-light text-xs text-center px-8 mt-1'>
					{product?.description}
				</CardDescription>
				<CardFooter className='mt-3 font-normal text-2xl text-center'>${product?.price}</CardFooter>
			</Card>
		</Link>
	);
};

export default ProductCard;
