import type { Actions } from './$types';
import { fail, redirect } from '@sveltejs/kit';
import { createLinkHandler } from '$lib/feature/create-link/api';

export const actions = {
	default: async (event) => {
		const res = await createLinkHandler(event);

		if (res.error) {
			if (res.error.exceptionType === 'Not Found') {
				redirect(301, `/link/${res.error.message}`);
			}
			return fail(400, res.error);
		}

		return res.data;
	}
} satisfies Actions;
