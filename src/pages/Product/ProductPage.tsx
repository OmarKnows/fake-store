import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getProduct } from '@/redux/products/products.slice';
import { useParams } from 'react-router-dom';
import { RootState } from '@/redux/store';
import { useEffect, useState } from 'react';
import ProductRating from '@/components/ProductRating';
import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
import { GoCheck } from 'react-icons/go';
import { cn } from '@/lib/utils';
import 'react-loading-skeleton/dist/skeleton.css';
import ProdutSkeleton from './ProdutSkeleton';
import { addToCart } from '@/redux/cart/cart.slice';
import BeatLoader from 'react-spinners/BeatLoader';

const ProductPage = () => {
	const dispatch = useAppDispatch();
	const { product, loading, error } = useAppSelector((state: RootState) => state.products);
	const { loading: cartLoading } = useAppSelector((state) => state.cart);
	const { id } = useParams();

	// const [quantity, setQuantity] = useState<number>(0);
	const [selectedImg, setSelectedImg] = useState<string | undefined>(undefined);

	useEffect(() => {
		id && dispatch(getProduct(id));
	}, []);

	return (
		<div>
			{loading && <ProdutSkeleton />}
			{!loading && !error ? (
				<div className='flex justify-center mt-20'>
					<div className='flex flex-col justify-between gap-[10px] me-[14px] max-h-[571px] overflow-y-auto overflow-x-hidden p-2'>
						{product?.images.map((image, index) => (
							<div
								key={index}
								className={cn('w-[155px] h-[135px] cursor-pointer hover:scale-105 transition duration-500', {
									border: selectedImg === product.images[index],
								})}
							>
								<img
									className='w-full h-full object-contain'
									src={image}
									onClick={() => setSelectedImg(image)}
									onKeyDown={() => setSelectedImg(image)}
								/>
							</div>
						))}
					</div>
					<div className='w-[584px] h-[571px] border border-gray-300 me-10'>
						<img className='w-full h-full object-contain' src={selectedImg ?? product?.images[0]} />
					</div>
					<div className='w-[494px]'>
						<div className='font-semibold text-gray-900 mb-2'>{product?.title}</div>
						<div className='font-semibold text-sm text-gray-600 mb-4'>{product?.description}</div>
						<div className='flex items-center gap-32'>
							<div className='font-semibold text-sm text-gray-600'>item #: {product?._id}</div>
							<ProductRating value={product?.ratingsAverage} quantity={product?.ratingsQuantity} />
						</div>
						<div className='ms-3 my-6 text-xl font-medium'>${product?.price}</div>
						<div className='text-green-600 text-sm font-bold'>Order now and get it around Tuesday, January 17</div>
						<div className='flex text-sm my-6'>
							<div className='font-medium'>Availability :</div>
							<div className='flex text-green-600 items-center ms-1'>
								<div>In Stock</div>
								<GoCheck color='green' />
							</div>
						</div>
						<div className='flex items-center mb-6 gap-11'>
							{/* <Input
								className='w-[168px] h-[47px]'
								type='number'
								min={0}
								value={quantity}
								onChange={(e) => setQuantity(+e.target.value)}
							/> */}
							<Button
								onClick={() => product && dispatch(addToCart(product._id))}
								className='w-[168px] h-[47px] rounded-lg font-bold'
							>
								{cartLoading ? <BeatLoader color='white' /> : 'Add to Cart'}
							</Button>
						</div>
						<hr />
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default ProductPage;
