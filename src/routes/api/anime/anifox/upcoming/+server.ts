import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import type { Main } from '$lib/types';
import { redis } from '$lib/server/redis';

export const GET: RequestHandler = async ({ url, fetch, setHeaders }) => {
	try {
		const cached = await redis.get('upcoming');
		if (cached) {
			console.log('Cached data found for upcoming animes');
			const ttl = await redis.ttl('upcoming');
			setHeaders({ 'cache-control': `max=age=${ttl}` });
			return json(JSON.parse(cached) as Main);
		} else {
			console.log('Cached data not found for upcoming animes');

			const response = await fetch(
				`https://consument-six.vercel.app/meta/anilist/advanced-search?status=NOT_YET_RELEASED&sort=["POPULARITY_DESC","SCORE_DESC"]&perPage=4`
			);
			const data = await response.json();
			redis.set('upcoming', JSON.stringify(data), 'EX', 60 * 60 * 24); // 1 day cache
			return json(data as Main);
		}
	} catch (error) {
		console.error(error);
		return json(`failed to fetch data for upcoming animes \n ${(error as Error).message}`);
	}
};
