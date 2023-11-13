import React from 'react';
import { GrNext } from 'react-icons/gr';

interface NextArrowProps {
	onClick: () => void;
}

const NextArrow: React.FC<NextArrowProps> = ({ onClick }) => (
	<button className='absolute top-1/2 right-0 transform -translate-y-1/2' onClick={onClick}>
		<GrNext />
	</button>
);

export default NextArrow;
