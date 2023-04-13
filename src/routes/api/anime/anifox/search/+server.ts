import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import type { Main } from '$lib/types';
import { redis } from '$lib/server/redis';
import { error } from '@sveltejs/kit';
export const GET: RequestHandler = async ({ url, fetch, setHeaders }) => {
	try {
		const page = url.searchParams.get('page') || '1';
		const query = url.searchParams.get('query') || '';

		console.log(`Cached data not found for ${query}`);

		const response = await fetch(
			`https://consument-six.vercel.app/meta/anilist/${query}?page=${page}`
		);
		const data = await response.json();
		return json(data as Main);
	} catch (error) {
		console.error(error);
		return json(`failed to fetch data for ur search query \n ${(error as Error).message}`);
	}
};
