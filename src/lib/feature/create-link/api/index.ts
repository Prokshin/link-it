import bcrypt from 'bcrypt';
import md5 from 'crypto-js/md5';
import { linkSchema, type Link } from '$lib/entities/link';
import type { RequestEvent } from '../../../../routes/create-link/$types';
import { createLinkFormSchema } from '../model/form';
import { createLink } from '$lib/entities/link/api/linkApiService';
import type { IHandlerMessage } from '$lib/shared/handlerMessage';

export const createLinkHandler = async (event: RequestEvent): Promise<IHandlerMessage<Link>> => {
	const formData = await event.request.formData();

	const rawData: { [key: string]: string } = {};
	formData.forEach((value, key) => {
		rawData[key] = value as string;
	});

	const { data, error, success } = createLinkFormSchema.safeParse(rawData);

	if (!success) {
		return {
			status: 'fail',
			error: { exceptionType: 'Contract Validation', message: error.message }
		};
	}

	const url = md5(data.url + Date.now() + data.title).toString();
	const password = await bcrypt.hash(data.password, 10);
	const rawLink = await createLink({ ...data, hashedUrl: url, password });

	const { data: link } = linkSchema.safeParse(rawLink);

	if (!link) {
		return { status: 'fail', error: { exceptionType: 'Not Found', message: url } };
	}

	return { status: 'success', data: link };
};
