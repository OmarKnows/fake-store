import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
	img?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(({ className, type, img, ...props }, ref) => {
	return (
		<div className='relative'>
			<div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
				{img && <img className='h-6 w-6 ' src={img} />}
			</div>
			<input
				type={type}
				className={cn(
					'flex h-16 w-full rounded-[8px] border border-gray-400 bg-white ps-16 pe-4 py-2 text-[23px] ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-black focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 font-normal',
					className
				)}
				ref={ref}
				{...props}
			/>
		</div>
	);
});
Input.displayName = 'Input';

export { Input };
