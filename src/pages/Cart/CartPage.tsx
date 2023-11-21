import { Button } from '@/components/ui/button';
import { clearCart, getCart, removeFromCart } from '@/redux/cart/cart.slice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { useEffect } from 'react';
import { IoMdClose } from 'react-icons/io';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartPage = () => {
	const dispatch = useAppDispatch();
	const { products, totalCartPrice, error } = useAppSelector((state) => state.cart);

	useEffect(() => {
		dispatch(getCart());
		if (error) toast.error(error);
	}, [error]);

	return (
		<div className='flex justify-center gap-5'>
			<ToastContainer />
			<div className=' p-5 rounded-lg shadow-md mt-10'>
				<div className='flex justify-between items-center'>
					<div className='text-2xl font-bold my-3'>My Cart</div>

					<Button variant='ghost' className='ml-auto' onClick={() => dispatch(clearCart())}>
						<IoMdClose size='2rem' />
					</Button>
				</div>
				<hr />
				<div>
					{products.length ? (
						products?.map((product) => (
							<div key={product._id}>
								<div className='flex p-5 gap-5 justify-between'>
									<div className='w-32'>
										<img className='w-full h-full object-contain' src={product.product.imageCover} />
									</div>
									<div className='flex flex-col gap-3'>
										<div>${product.price}</div>
										<div>{product.product.title}</div>
										<div>Quantity: {product.count}</div>
									</div>
									<Button
										variant='ghost'
										className='ml-auto'
										onClick={() => dispatch(removeFromCart(product.product._id))}
									>
										<IoMdClose size='2rem' />
									</Button>
								</div>
								<hr />
							</div>
						))
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
	);
};

export default CartPage;
