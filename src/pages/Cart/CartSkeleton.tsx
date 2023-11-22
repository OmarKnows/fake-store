import Skeleton from 'react-loading-skeleton';
import CartItem from './CartItem';

const CartSkeleton = () => {
	return (
		<div className='flex justify-center gap-5'>
			<div className=' p-5 rounded-lg shadow-md mt-10'>
				<Skeleton />
				<hr />
				<CartItem loading />
				<CartItem loading />
			</div>
			<div className='h-fit p-5 rounded-lg shadow-md mt-10 w-[288px]'>
				<Skeleton className='my-3' />
				<hr />
				<Skeleton className='my-3' />
				<hr />
				<Skeleton className='mt-5' />
			</div>
		</div>
	);
};

export default CartSkeleton;
