import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getProduct } from '@/redux/products/products.slice';
import { useParams } from 'react-router-dom';
import { RootState } from '@/redux/store';
import { useEffect } from 'react';
import ProductRating from '@/components/ProductRating';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ProductPage = () => {
	const dispatch = useAppDispatch();
	const { product, loading, error } = useAppSelector((state: RootState) => state.products);
	const { id } = useParams();

	useEffect(() => {
		id && dispatch(getProduct(id));
		console.log(product);
	}, [dispatch]);

	return (
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			{!loading && !error ? (
				<div className='flex justify-center mt-[15vh] '>
					<div className='flex border border-1 border-gray-300'>
						<div className='w-60 border border-1 border-gray-300 p-5'>
							<img className='w-100 h-100 object-contain' src={product?.image} />
						</div>
						<div className='text-center px-5'>
							<p className='text-3xl font-bold mt-5'>{product?.title}</p>
							<p className='my-10'>Description: {product?.description}</p>
							<div className='flex justify-between my-10'>
								<div className='text-2xl items-center'>${product?.price}</div>
								<div className='text-2xl'>
									<ProductRating value={product?.rating} />
								</div>
							</div>
							<div className='flex justify-between my-10'>
								<div className='text-2xl items-center'>
									<Input type='number' />
								</div>
								<div className='text-2xl'>
									<Button>Add To Cart</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default ProductPage;
