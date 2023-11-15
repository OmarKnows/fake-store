import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getProduct } from '@/redux/products/products.slice';
import { useParams } from 'react-router-dom';
import { RootState } from '@/redux/store';
import { useEffect, useState } from 'react';
import ProductRating from '@/components/ProductRating';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { GoCheck } from 'react-icons/go';
import { cn } from '@/lib/utils';

const ProductPage = () => {
	const dispatch = useAppDispatch();
	const { product, loading, error } = useAppSelector((state: RootState) => state.products);
	const { id } = useParams();

	const [quantity, setQuantity] = useState<number>(0);
	const [selectedImg, setSelectedimg] = useState<number>(1);

	useEffect(() => {
		id && dispatch(getProduct(id));
	}, []);

	return (
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			{!loading && !error ? (
				<div className='flex justify-center mt-20 items-center'>
					<div className='[&>*]:overflow-hidden [&>*]:w-[155px] [&>*]:h-[135px] flex flex-col justify-between h-full gap-[10px] me-[14px]'>
						<div onClick={() => setSelectedimg(1)} className={cn('cursor-pointer', selectedImg === 1 ? 'border' : '')}>
							<img className='w-full h-full object-contain' src={product?.image} />
						</div>
						<div onClick={() => setSelectedimg(2)} className={cn('cursor-pointer', selectedImg === 2 ? 'border' : '')}>
							<img className='w-full h-full object-contain' src={product?.image} />
						</div>
						<div onClick={() => setSelectedimg(3)} className={cn('cursor-pointer', selectedImg === 3 ? 'border' : '')}>
							<img className='w-full h-full object-contain' src={product?.image} />
						</div>
						<div onClick={() => setSelectedimg(4)} className={cn('cursor-pointer', selectedImg === 4 ? 'border' : '')}>
							<img className='w-full h-full object-contain' src={product?.image} />
						</div>
					</div>
					<div className='w-[584px] h-[571px] border border-gray-300 me-10'>
						<img className='w-full h-full object-contain' src={product?.image} />
					</div>
					<div className='w-[494px]'>
						<div className='font-semibold text-gray-900 mb-2'>{product?.title}</div>
						<div className='font-semibold text-sm text-gray-600 mb-4'>{product?.description}</div>
						<div className='flex items-center gap-32'>
							<div className='font-semibold text-sm text-gray-600'>item #: {product?.id}</div>
							<ProductRating value={product?.rating} />
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
							<Input
								className='w-[168px] h-[47px]'
								type='number'
								min={0}
								value={quantity}
								onChange={(e) => setQuantity(+e.target.value)}
							/>
							<Button className='w-[168px] h-[47px] rounded-lg font-bold'>Add to Cart</Button>
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
