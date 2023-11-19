import React from 'react';
import { FaRegStar, FaRegStarHalfStroke, FaStar } from 'react-icons/fa6';

interface IRatingProps {
	value?: number;
	quantity?: number;
}

const ProductRating: React.FC<IRatingProps> = ({ value = 0, quantity }) => {
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
				<div key={index}>{getStarIcon(+value - rating + 1)}</div>
			))}
			<div className='ms-1 italic text-gray-400 text-sm'>{quantity}</div>
		</div>
	);
};

export default ProductRating;
