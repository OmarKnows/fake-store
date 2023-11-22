import { IProduct } from '@/redux/products/productsModel';
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import CustomLink from './CustomLink';

interface IProductCardProps {
	product?: IProduct;
	loading?: boolean;
}

const ProductCard: React.FC<IProductCardProps> = ({ product, loading = false }) => {
	return (
		<CustomLink disabled={loading} to={'/products/' + product?._id}>
			<Card className='h-[374px] hover:scale-105 transition duration-500 '>
				<CardContent className='flex justify-center '>
					<div className='h-[264px] w-[264px] overflow-hidden pt-3 '>
						{loading ? (
							<Skeleton enableAnimation className='h-full w-full' />
						) : (
							<img className='h-full w-full object-cover' src={product?.images[0]} />
						)}
					</div>
				</CardContent>
				<CardHeader className='mt-3 text-center font-semibold text-lg'>
					{loading ? <Skeleton enableAnimation /> : <p className='truncate '>{product?.title}</p>}
				</CardHeader>
				<CardDescription className='truncate font-light text-xs text-center px-8 mt-1'>
					{loading ? <Skeleton enableAnimation /> : product?.description}
				</CardDescription>
				{loading ? <></> : <CardFooter className='mt-3 font-normal text-2xl text-center'>${product?.price}</CardFooter>}
			</Card>
		</CustomLink>
	);
};

export default ProductCard;
