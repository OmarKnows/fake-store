import { Rating } from '@/redux/products/productsModel';
import React from 'react';
import { FaRegStar, FaRegStarHalfStroke, FaStar } from 'react-icons/fa6';

interface IRatingProps {
	value?: Rating;
}

const ProductRating: React.FC<IRatingProps> = ({
	value = {
		rate: 0,
		count: 0,
	},
}) => {
	const ratings = [1, 2, 3, 4, 5];

	const getStarIcon = (rating: number) => {
		switch (true) {
			case rating >= 1:
				return <FaStar color={'orange'} />;
			case rating >= 0.5:
				return <FaRegStarHalfStroke color={'orange'} />;
			default:
				return <FaRegStar color={'gray'} />;
		}
	};

	return (
		<div className='flex'>
			{ratings.map((rating, index) => (
				<div key={index}>{getStarIcon(value.rate - rating + 1)}</div>
			))}
			<div className='ms-1 italic text-gray-400 text-sm'>{value.count}</div>
		</div>
	);
};

export default ProductRating;
