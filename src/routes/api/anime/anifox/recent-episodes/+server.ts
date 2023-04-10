import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import type { Main } from '$lib/types';
import { redis} from '$lib/server/redis';
// FIXME: look into how to cache this data properly
export const GET: RequestHandler = async ({ url, fetch, setHeaders }) => {
	try {
		const page = url.searchParams.get('page') || '1';
		const cached = await redis.get(`recent:${page}`);
		if (cached) {
			console.log('Cached data found for recent episodes anime');
			const ttl = await redis.ttl(`recent:${page}`);
			setHeaders({ 'cache-control': `max=age=${ttl}` });
			return json(JSON.parse(cached) as Main);
		} else {
			console.log('Cached data not found for recent episodes');

			const response = await fetch(
				`https://api.consumet.org/meta/anilist/recent-episodes?page=${page}&provider=zoro&perPage=40`
			);
			const data = await response.json();
			redis.set(`recent:${page}`, JSON.stringify(data), 'EX', 60 * 60 * 3); // 1 day cache
			return json(data as Main);
		}
	} catch (error) {
		console.error(error);
		return json(`failed to fetch data for recent episodes \n ${(error as Error).message}`);
	}
};
