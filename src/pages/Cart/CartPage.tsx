import { Button } from '@/components/ui/button';
import { clearAnonymousCart, clearCart, getAnonymousCart, getCart } from '@/redux/cart/cart.slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CartItem from './CartItem';
import CartSkeleton from './CartSkeleton';

const CartPage = () => {
	const dispatch = useAppDispatch();
	const { products, totalCartPrice, error, loading } = useAppSelector((state) => state.cart);
	const { token } = useAppSelector((state) => state.auth);

	const handleClearCart = () => {
		token ? dispatch(clearCart()) : dispatch(clearAnonymousCart());
	};

	useEffect(() => {
		if (token) {
			dispatch(getCart());
			if (error) toast.error(error);
		} else dispatch(getAnonymousCart());
	}, [error, token]);

	if (loading) return <CartSkeleton />;
	return (
		<div>
			<div className='flex justify-center gap-5'>
				<ToastContainer />
				<div className=' p-5 rounded-lg shadow-md mt-10'>
					<div className='flex justify-between items-center'>
						<div className='text-2xl font-bold my-3'>My Cart</div>

						<Button variant='ghost' className='ml-auto' onClick={handleClearCart}>
							<IoMdClose size='2rem' />
						</Button>
					</div>
					<hr />
					<div>
						{products?.length ? (
							products?.map((product) => <CartItem key={product._id} product={product} />)
						) : (
							<div className='text-xl p-10'>Your Cart Is Empty</div>
						)}
					</div>
				</div>
				<div className='h-fit p-5 rounded-lg shadow-md mt-10'>
					<div className='text-xl font-bold my-3'>Total</div>
					<hr />
					<div className='flex justify-between items-center gap-40 my-3'>
						<div className='text-xl font-bold'>Sub-total</div>
						<div>${totalCartPrice}</div>
					</div>
					<hr />
					<Button className='w-full mt-5' variant='success'>
						CHECKOUT
					</Button>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
