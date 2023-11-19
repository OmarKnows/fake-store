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
import 'react-loading-skeleton/dist/skeleton.css';
import ProdutSkeleton from './ProdutSkeleton';

const ProductPage = () => {
	const dispatch = useAppDispatch();
	const { product, loading, error } = useAppSelector((state: RootState) => state.products);
	const { id } = useParams();

	const [quantity, setQuantity] = useState<number>(0);
	const [selectedImg, setSelectedimg] = useState<string>('');

	useEffect(() => {
		id && dispatch(getProduct(id));
		product?.images.map((image) => console.log(image));
	}, []);

	return (
		<div>
			{loading && <ProdutSkeleton />}
			{!loading && !error ? (
				<div className='flex justify-center mt-20'>
					<div className='flex flex-col justify-between h-full gap-[10px] me-[14px]'>
						{product?.images.map((image, index) => (
							<div className='w-[155px] h-[135px] overflow-hidden'>
								<img className='w-full h-full object-contain' key={index} src={image} />
							</div>
						))}
					</div>
					<div className='w-[584px] h-[571px] border border-gray-300 me-10'>
						<img className='w-full h-full object-contain' src={selectedImg} />
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
