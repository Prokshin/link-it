import bcrypt from 'bcrypt';
import { apiLinkService } from '$lib/entities/link';
import { linkSchema, type Link } from '$lib/entities/link';
import type { RequestEvent } from '../../../../routes/link/[slug]/$types';
import type { IHandlerMessage } from '$lib/shared/handlerMessage';

const checkValidPassword = async (hashedUrl: string, password: string) => {
	const hashedPassword = await apiLinkService.getHashedPassword(hashedUrl);
	return bcrypt.compare(password as string, hashedPassword);
};

export const getLinkInfoHandler = async (event: RequestEvent): Promise<IHandlerMessage<Link>> => {
	try {
		const slug = event.params.slug;
		const formData = await event.request.formData();

		const isValid = await checkValidPassword(slug, formData.get('password') as string);
		if (!isValid) {
			return {
				status: 'fail',
				error: {
					exceptionType: 'Forbidden',
					message: 'Неверный пароль'
				}
			};
		}

		const linkRaw = await apiLinkService.getLink(slug);

		const { data: link, error } = linkSchema.safeParse(linkRaw);

		if (error) {
			return {
				status: 'fail',
				error: {
					exceptionType: 'Not Found',
					message: 'Ссылка не найдена'
				}
			};
		}

		return {
			status: 'success',
			data: link
		};
	} catch (e) {
		return {
			status: 'fail',
			error: { exceptionType: 'Unexpected Error', message: 'Произошла неизвестная ошибка' }
		};
	}
};
