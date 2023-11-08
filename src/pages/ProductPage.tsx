import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { getProduct } from '@/redux/products/products.slice';
import { useParams } from 'react-router-dom';
import { RootState } from '@/redux/store';
import { useEffect } from 'react';
import ProductRating from '@/components/ProductRating';

const ProductPage = () => {
	const dispatch = useAppDispatch();
	const { product, loading, error } = useAppSelector((state: RootState) => state.products);
	const { id } = useParams();

	useEffect(() => {
		id && dispatch(getProduct(id));
	}, [dispatch]);

	return (
		<div>
			{loading && <p>Loading...</p>}
			{error && <p>Error: {error}</p>}
			{!loading && !error ? (
				<div>
					<div className='flex justify-center items-center divide-x-2 p-3'>
						<div>
							<h1 className='font-bold text-3xl p-3'>{product?.title}</h1>
							<p className='w-1/2'>{product?.description}</p>
							<ProductRating value={product?.rating} />
							<p>Price: ${product?.price}</p>
						</div>
						<div>
							<img src={product?.image} />
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
