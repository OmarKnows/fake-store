import ProductCard from '@/components/ProductCard';
import Skeleton from 'react-loading-skeleton';

const ProductsSkeleton = () => {
	return (
		<div className='my-5'>
			<div className='flex justify-between px-24 mb-1'>
				<Skeleton className='w-40' enableAnimation />
				<Skeleton className='w-20' enableAnimation />
			</div>
			<hr className='mx-9' />
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10 mx-24'>
				<ProductCard loading={true} />
				<ProductCard loading={true} />
				<ProductCard loading={true} />
				<ProductCard loading={true} />
			</div>
		</div>
	);
};

export default ProductsSkeleton;
