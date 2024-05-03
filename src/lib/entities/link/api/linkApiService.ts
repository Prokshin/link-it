import type { CreateLink } from '$lib/feature/create-link/model/form';
import { supabase } from '$lib/shared/supabase/client';
import type { Link } from '$lib/entities/link';

export const createLink = async (data: CreateLink) => {
	const { data: response, error } = await supabase
		.from('links')
		.insert({
			title: data.title,
			description: data.description,
			hashedUrl: data.hashedUrl,
			password: data.password,
			url: data.url
		})
		.select();

	if (error) {
		throw error;
	}

	return response[0];
};

export const getLink = async (hash: string) => {
	const { data, error } = await supabase.from('links').select().eq('hashedUrl', hash);

	if (error) {
		throw error;
	}

	return data[0] as Link;
};

export const getHashedPassword = async (hash: string) => {
	const { data, error } = await supabase.from('links').select('password').eq('hashedUrl', hash);

	if (error) {
		throw error;
	}

	return data[0].password as string;
};
