import fb from '@/assets/facebook.png';
import tw from '@/assets/twitter.png';

const Footer = () => {
	return (
		<div className='flex justify-between py-10 px-12 bg-gray-800 mt-24 text-2xl absolute bottom-0 w-full'>
			<div>
				<div className='text-white font-light'>Fake Store</div>
				<ul className='font-medium text-gray-600 ps-8 mt-5 list-disc'>
					<li>About Us</li>
					<li>Contact Us</li>
					<li>Our Store</li>
					<li>Blog</li>
					<li>Site Map</li>
				</ul>
			</div>
			<div>
				<div className='text-white font-light'>Customer Info</div>
				<ul className='font-medium text-gray-600 ps-8 mt-5 list-disc'>
					<li>Delivery</li>
					<li>Returns</li>
					<li>Cookie Policy</li>
					<li>Terms & Conditions</li>
					<li>Privacy Policy</li>
				</ul>
			</div>
			<div>
				<div className='text-white font-light'>Features</div>
				<ul className='font-medium text-gray-600 ps-8 mt-5 list-disc'>
					<li>Best Sellers</li>
					<li>Shop The Sale</li>
					<li>Gift Vouchers</li>
					<li>Meet The Team</li>
					<li>Competitions</li>
				</ul>
			</div>
			<div>
				<div className='text-white font-light'>Follow Us</div>
				<div className='flex gap-8 mt-4 ps-4'>
					<div className='h-7 w-7'>
						<img className='w-full h-full object-contain' src={fb} />
					</div>
					<div className='h-7 w-7'>
						<img className='w-full h-full object-contain' src={tw} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
