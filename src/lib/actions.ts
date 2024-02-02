'use server';

import { Resend } from 'resend';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
	const email = formData.get('email') as string;

	try {
		const data = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: email,
			subject: 'Hello world',
			react: EmailTemplate({ firstName: 'Renan' }),
		});

		return data;
	} catch (error) {
		return Response.json({ error });
	}
}
