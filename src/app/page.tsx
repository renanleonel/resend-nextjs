import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function Home() {
	return (
		<form className='flex gap-4'>
			<Input placeholder='email' />
			<Button type='submit' variant='secondary'>
				send
			</Button>
		</form>
	);
}
