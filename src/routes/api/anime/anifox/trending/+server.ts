import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import type { Main } from '$lib/types';
import { redis } from '$lib/server/redis';

export const GET: RequestHandler = async ({ url, fetch, setHeaders }) => {
	try {
		const page = url.searchParams.get('page') || '1';
		const perPage = url.searchParams.get('PerPage') || '10';
		const cached = await redis.get(`trending:${page}`);

		if (cached) {
			console.log('Cached data found for trending anime');
			const ttl = await redis.ttl(`trending:${page}`);
			setHeaders({ 'cache-control': `max=age=${ttl}` });
			return json(JSON.parse(cached) as Main);
		} else {
			console.log('Cached data not found for trending anime');

			const response = await fetch(
				`https://consument-six.vercel.app/meta/anilist/trending?page=${page}&perPage=${perPage}`
			);
			const data = await response.json();
			redis.set(`trending:${page}`, JSON.stringify(data), 'EX', 60 * 60 * 24); // 1 day cache
			return json(data as Main);
		}
	} catch (error) {
		console.error(error);
		return json(`failed to fetch data for trending anime \n ${(error as Error).message}`);
	}
};
