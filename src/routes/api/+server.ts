import type { RequestHandler } from '@sveltejs/kit';

/** @type {import('./$types').RequestHandler} */
export const GET = (({ url }) => {
	return new Response(String(Math.random()));
}) satisfies RequestHandler;
