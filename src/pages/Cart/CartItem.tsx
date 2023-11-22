import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { removeFromAnonymousCart, removeFromCart } from '@/redux/cart/cart.slice';
import { ICartItem } from '@/redux/cart/cartModel';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import React, { useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import Skeleton from 'react-loading-skeleton';

interface ICartItemProps {
	product?: ICartItem;
	loading?: boolean;
}

const CartItem: React.FC<ICartItemProps> = ({ product, loading = false }) => {
	const { token } = useAppSelector((state) => state.auth);
	const dispatch = useAppDispatch();

	const handleRemoveItem = (product: ICartItem) => {
		token ? dispatch(removeFromCart(product._id)) : dispatch(removeFromAnonymousCart(product));
	};

	const [quantity, setQuantity] = useState<number | undefined>(product?.count);

	return (
		<div>
			<div className='flex p-5 gap-5 justify-between'>
				<div className='w-32'>
					{loading ? (
						<Skeleton className='w-full h-full object-contain' />
					) : (
						<img className='w-full h-full object-contain' src={product?.product.imageCover} />
					)}
				</div>
				<div className='flex flex-col gap-3'>
					{loading ? <Skeleton width={290} /> : <div>${product?.price}</div>}
					{loading ? <Skeleton /> : <div>{product?.product.title}</div>}
					{loading ? (
						<Skeleton />
					) : (
						<div className='flex items-center gap-2'>
							<div>Quantity:</div>
							<Input
								className='w-10 p-1 h-10'
								type='number'
								min={0}
								value={quantity}
								onChange={(e) => setQuantity(+e.target.value)}
							/>
						</div>
					)}
				</div>
				{loading ? (
					<></>
				) : (
					<Button variant='ghost' className='ml-auto' onClick={() => (product ? handleRemoveItem(product) : null)}>
						<IoMdClose size='2rem' />
					</Button>
				)}
			</div>
			<hr />
		</div>
	);
};

export default CartItem;
