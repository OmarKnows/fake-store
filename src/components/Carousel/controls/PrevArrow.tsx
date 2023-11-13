import React from 'react';
import { GrPrevious } from 'react-icons/gr';

interface PrevArrowProps {
	onClick: () => void;
}

const PrevArrow: React.FC<PrevArrowProps> = ({ onClick }) => (
	<button className=' absolute top-1/2 left-0 transform -translate-y-1/2 z-10' onClick={onClick}>
		<GrPrevious />
	</button>
);

export default PrevArrow;
