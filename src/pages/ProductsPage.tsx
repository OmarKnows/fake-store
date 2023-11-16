import Carousel from '@/components/Carousel/Carousel';
import ProductCard from '@/components/ProductCard';
import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { getCategories, getProducts } from '@/redux/products/products.slice';
import { RootState } from '@/redux/store';
import { useEffect } from 'react';
import carousel1 from '@/assets/carousel1.avif';
import carousel2 from '@/assets/carousel2.avif';
import carousel3 from '@/assets/carousel3.avif';
import { Link } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductsPage = () => {
	const dispatch = useAppDispatch();
	const { products, categories, loading, error } = useAppSelector((state: RootState) => state.products);

	useEffect(() => {
		dispatch(getProducts());
		dispatch(getCategories());
	}, [dispatch]);

	return (
		<div>
			<Carousel
				items={[
					<img className='h-full w-full object-cover' src={carousel1} key={1} />,
					<img className='h-full w-full object-cover' src={carousel2} key={2} />,
					<img className='h-full w-full object-cover' src={carousel3} key={3} />,
				]}
			/>
			{loading && (
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
			)}
			{error && <p>Error: {error}</p>}
			{!loading && !error ? (
				<div>
					{categories?.map((category, index) => (
						<div key={index} className='my-5'>
							<div className='flex justify-between px-24 mb-1'>
								<h1 className='font-light text-3xl '>{category}</h1>
								<Link className='font-light text-xl underline text-gray-600' to={'category/' + category}>
									View All
								</Link>
							</div>
							<hr className='mx-9' />
							<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-10 mx-24'>
								{products
									?.filter((product) => product.category === category)
									.map((product) => (
										<div key={product.id}>
											<ProductCard product={product} />
										</div>
									))
									.slice(0, 4)}
							</div>
						</div>
					))}
				</div>
			) : (
				<></>
			)}
		</div>
	);
};

export default ProductsPage;
