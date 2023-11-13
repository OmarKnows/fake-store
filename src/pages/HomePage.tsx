import Carousel from '@/components/Carousel/Carousel';
import carousel1 from '@/assets/carousel1.avif';
import carousel2 from '@/assets/carousel2.avif';
import carousel3 from '@/assets/carousel3.avif';

const HomePage = () => {
	return (
		<div>
			<Carousel
				items={[
					<img className='h-full w-full object-cover' src={carousel1} key={1} />,
					<img className='h-full w-full object-cover' src={carousel2} key={2} />,
					<img className='h-full w-full object-cover' src={carousel3} key={3} />,
				]}
			/>
		</div>
	);
};

export default HomePage;
