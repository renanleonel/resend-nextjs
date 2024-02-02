import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { sendEmail } from '@/lib/actions';

export default function Home() {
	return (
		<form action={sendEmail} className='flex gap-4'>
			<Input name='email' placeholder='email' />
			<Button type='submit' variant='secondary'>
				send
			</Button>
		</form>
	);
}
