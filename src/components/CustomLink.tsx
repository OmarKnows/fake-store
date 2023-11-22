import { cn } from '@/lib/utils';
import React from 'react';
import { Link } from 'react-router-dom';

interface ICustomLinkProps {
	to: string;
	disabled?: boolean;
	children?: React.ReactNode;
}

const CustomLink: React.FC<ICustomLinkProps> = ({ to, disabled = false, children }) => {
	return (
		<div
			className={cn({
				'pointer-events-none': disabled,
			})}
		>
			<Link to={to}>{children}</Link>
		</div>
	);
};

export default CustomLink;
