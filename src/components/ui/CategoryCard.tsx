import React from 'react';
import { Card, CardContent, CardHeader } from './card';
import Skeleton from 'react-loading-skeleton';
import { ICategory } from '@/redux/products/productsModel';
import CustomLink from './CustomLink';

interface ICategoryCardProps {
	category?: ICategory;
	loading?: boolean;
}

const CategoryCard: React.FC<ICategoryCardProps> = ({ category, loading }) => {
	return (
		<CustomLink disabled={loading} to={`${category?._id}`}>
			<Card className='h-[324px] hover:scale-105 transition duration-500'>
				<CardContent className='flex justify-center'>
					<div className='h-[264px] w-[264px] overflow-hidden '>
						{loading ? (
							<Skeleton enableAnimation className='h-full w-full' />
						) : (
							<img className='h-full w-full object-cover' src={category?.image} />
						)}
					</div>
				</CardContent>
				<CardHeader className='mt-3 text-center font-semibold text-lg'>
					<p className='truncate '>{category?.name ?? <Skeleton enableAnimation />}</p>
				</CardHeader>
			</Card>
		</CustomLink>
	);
};

export default CategoryCard;
