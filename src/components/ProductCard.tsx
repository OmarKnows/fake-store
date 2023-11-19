import { IProduct } from '@/redux/products/productsModel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import React from 'react';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

interface IProductCardProps {
	product?: IProduct;
	loading?: boolean;
}

const ProductCard: React.FC<IProductCardProps> = ({ product, loading = false }) => {
	return (
		<Link to={loading ? '/products' : `${product?._id}`}>
			<Card className='h-[374px]'>
				<CardContent className='flex justify-center'>
					<div className='h-[264px] w-[264px] overflow-hidden '>
						{loading ? (
							<Skeleton enableAnimation className='h-full w-full' />
						) : (
							<img className='h-full w-full object-cover' src={product?.images[0]} />
						)}
					</div>
				</CardContent>
				<CardHeader className='mt-3 text-center font-semibold text-lg'>
					<p className='truncate '>{product?.title ?? <Skeleton enableAnimation />}</p>
				</CardHeader>
				<CardDescription className='truncate font-light text-xs text-center px-8 mt-1'>
					{product?.description ?? <Skeleton enableAnimation count={2} />}
				</CardDescription>
				{loading ? <></> : <CardFooter className='mt-3 font-normal text-2xl text-center'>${product?.price}</CardFooter>}
			</Card>
		</Link>
	);
};

export default ProductCard;
