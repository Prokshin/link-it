import type { Actions } from './$types';
import { getLinkInfoHandler } from '$lib/feature/show-link/api/apiHandlers';
import type { Link } from '$lib/entities/link';
import { fail } from '@sveltejs/kit';

export const actions = {
	default: async (event) => {
		const res = await getLinkInfoHandler(event);

		if (res.error) {
			return fail(400, res.error);
		}

		return { isSuccess: true, data: res.data as Link };
	}
} satisfies Actions;
