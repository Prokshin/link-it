import { z } from 'zod';

export const createLinkFormSchema = z.object({
	title: z.string().min(1).max(255),
	description: z.string().max(512),
	url: z.string().url().min(1).max(255),
	password: z.string()
});

const createLinkSchema = createLinkFormSchema.extend({
	hashedUrl: z.string()
});

export type CreateLinkFormSchema = z.infer<typeof createLinkFormSchema>;
export type CreateLink = z.infer<typeof createLinkSchema>;
