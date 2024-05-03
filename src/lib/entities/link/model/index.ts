import { z } from 'zod';

export const linkSchema = z.object({
	created_at: z.coerce.date(),
	id: z.string(),
	title: z.string(),
	description: z.string(),
	url: z.string(),
	hashedUrl: z.string()
});

export type Link = z.infer<typeof linkSchema>;
