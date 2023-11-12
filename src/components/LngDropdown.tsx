import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import english from '../assets/english.png';
import arabic from '../assets/arabic.png';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useState } from 'react';

const LngDropdown = () => {
	const [language, setLanguage] = useState<string>('english');

	const handleLanguage = (lng: string): void => {
		setLanguage(lng);
	};

	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<div className='flex'>
					<div className='w-4 h-4'>{language === 'english' ? <img src={english} /> : <img src={arabic} />}</div>
					<MdKeyboardArrowDown />
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem onClick={() => handleLanguage('english')}>
					<div className='w-4 h-4 me-1'>
						<img src={english} />
					</div>
					<div>English</div>
				</DropdownMenuItem>
				<DropdownMenuItem onClick={() => handleLanguage('arabic')}>
					<div className='w-4 h-4 me-1'>
						<img src={arabic} />
					</div>
					<div>Arabic</div>
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default LngDropdown;
