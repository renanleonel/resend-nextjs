'use server';

import { Resend } from 'resend';
import { VercelInviteUserEmail } from '@/components/email-template';
import { schema } from './schema';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
	const email = formData.get('email') as string;

	const validate = schema.safeParse({ email });

	if (!validate.success) {
		return;
	}

	try {
		const data = await resend.emails.send({
			from: 'Acme <onboarding@resend.dev>',
			to: email,
			subject: 'Hello world',
			react: VercelInviteUserEmail({}),
		});

		return data;
	} catch (error) {
		return Response.json({ error });
	}
}
