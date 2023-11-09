import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const LoginPage = () => {
	return (
		<div>
			<h1 className='font-bold text-3xl p-3'>Login</h1>

			<div className='flex justify-center gap-5'>
				<Card className='p-5'>
					<CardTitle>Registered Customers</CardTitle>
					<CardHeader className='mt-5 text-xs'>If you have an account sign in with your email address.</CardHeader>
					<CardContent>
						<form>
							<label>Email</label>
							<Input className='my-5' type='email' />
							<label>Password</label>
							<Input className='my-5' type='Password' />
							<Button className='text center w-full'>Sign In</Button>
						</form>
					</CardContent>
				</Card>
				<div></div>
				<Card className='p-5'>
					<CardTitle>New Customer?</CardTitle>
					<CardHeader className='mt-5 text-xs'>
						Creating an account has many benefits:
						<ul className=' mt-3 list-disc'>
							<li>Checkout faster</li>
							<li>Keep more than one address</li>
							<li>Track orders and more</li>
						</ul>
					</CardHeader>
					<CardContent>
						<Button className='text center w-full'>Create An Account</Button>
					</CardContent>
				</Card>
			</div>
		</div>
	);
};

export default LoginPage;
