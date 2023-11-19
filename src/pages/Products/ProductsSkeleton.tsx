import ProductCard from '@/components/ProductCard';
import Skeleton from 'react-loading-skeleton';

const ProductsSkeleton = () => {
	return (
		<div className='px-24 mt-10'>
			<div>
				<Skeleton className='w-40' enableAnimation />
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10'>
				{Array.from({ length: 4 }).map((_, index) => (
					<ProductCard key={index} loading={true} />
				))}
			</div>
		</div>
	);
};

export default ProductsSkeleton;
