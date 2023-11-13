// Carousel.tsx
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PrevArrow from './controls/PrevArrow';
import NextArrow from './controls/NextArrow';

interface CarouselProps {
	items: React.ReactNode[];
}

const Carousel: React.FC<CarouselProps> = ({ items }) => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: <PrevArrow onClick={() => slider?.slickPrev()} />,
		nextArrow: <NextArrow onClick={() => slider?.slickNext()} />,
	};

	let slider: Slider | null = null;

	return (
		<Slider ref={(ref) => (slider = ref)} {...settings}>
			{items.map((item, index) => (
				<div className='h-64' key={index}>
					{item}
				</div>
			))}
		</Slider>
	);
};

export default Carousel;
