import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
	try {
		const data = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: [''],
			subject: 'Hello world',
			react: EmailTemplate({ firstName: 'Renan' }),
		});

		return Response.json(data);
	} catch (error) {
		return Response.json({ error });
	}
}
