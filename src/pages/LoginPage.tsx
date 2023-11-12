import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import login_Splash from '../assets/login_splash.png';
import email from '../assets/email.png';
import password from '../assets/password.png';
import google from '../assets/google.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import { Checkbox } from '@/components/ui/checkbox';

const LoginPage = () => {
	return (
		<div className='flex'>
			<div className='w-1/2 flex justify-center text-center '>
				<div>
					<div className='font-medium text-4xl mt-40'>Welcome Back</div>
					<div className='font-light text-[21px] text-stroke mt-10 w-[460px]'>
						To keep connected with us please login with your personal information by email and password
					</div>
					<form className='mt-20'>
						<Input type='text' placeholder='Email Address' img={email} />
						<Input type='password' placeholder='Password' img={password} className='mt-14' />
						<div className='flex justify justify-between mt-8 font-light text-stroke text-[21px]'>
							<div className='flex items-center'>
								<Checkbox className='me-1' />
								<div>Remember Me</div>
							</div>
							<div>Forgot Password?</div>
						</div>
						<div className='mt-8 mb-4'>
							<Button className='h-14 w-56'>Login Now</Button>
						</div>
						<div>
							<Button className='h-12 w-56' variant='outline'>
								Create Account
							</Button>
						</div>
					</form>
					<div className='mt-9 font-light text-stroke text-[21px] text-start'>or you can join with</div>
					<div className='flex justify-center gap-8 mt-6'>
						<img src={google} />
						<img src={facebook} />
						<img src={twitter} />
					</div>
				</div>
			</div>
			<div className='w-1/2'>
				<img className='w-full ' src={login_Splash} />
			</div>
		</div>
	);
};

export default LoginPage;
