import Skeleton from 'react-loading-skeleton';

const ProdutSkeleton = () => {
	return (
		<div className='flex justify-center mt-20 items-center'>
			<div className='[&>*]:overflow-hidden [&>*]:w-[155px] [&>*]:h-[135px] flex flex-col justify-between h-full gap-[10px] me-[14px]'>
				{Array.from({ length: 4 }).map((_, index) => (
					<Skeleton key={index} height={135} width={155} />
				))}
			</div>

			<div className='w-[584px] h-[571px]  me-10'>
				<Skeleton height={571} width={584} />
			</div>

			<div className='w-[494px]'>
				<Skeleton height={24} width={300} />
				<Skeleton height={16} width={250} count={2} />
				<Skeleton height={16} width={100} />
				<Skeleton height={16} width={150} />
				<Skeleton height={16} width={300} />
				<Skeleton height={24} width={250} />

				<div className='flex items-center mb-6 gap-11'>
					<Skeleton height={47} width={168} />
					<Skeleton height={47} width={168} />
				</div>

				<hr />
			</div>
		</div>
	);
};

export default ProdutSkeleton;
