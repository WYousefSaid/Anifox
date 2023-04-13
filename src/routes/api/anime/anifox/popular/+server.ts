import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import type { Main } from '$lib/types';
import { redis } from '$lib/server/redis';

export const GET: RequestHandler = async ({ url, fetch, setHeaders }) => {
	try {
		// check if query is present for page and per_page
		const page = url.searchParams.get('page') || '1';
		const perPage = url.searchParams.get('PerPage') || '10';

		const cached = await redis.get('popular');
		if (cached) {
			console.log('Cached data found for popular anime');
			const ttl = await redis.ttl('popular');
			setHeaders({ 'cache-control': `max=age=${ttl}` });
			return json(JSON.parse(cached) as Main);
		} else {
			console.log('Cached data not found for popular anime');

			const response = await fetch(
				`https://consument-six.vercel.app/meta/anilist/popular?page=${page}&perPage=${perPage}`
			);
			const data = await response.json();
			redis.set('popular', JSON.stringify(data), 'EX', 60 * 60 * 24); // 1 day cache
			return json(data as Main);
		}
	} catch (error) {
		console.error(error);
		return json(`failed to fetch data for popular anime \n ${(error as Error).message}`);
	}
};
