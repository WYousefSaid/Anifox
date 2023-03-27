import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import type { Data } from '$lib/types';
import { redis } from '$lib/server/redis';
import type {ApiResponse} from '$lib/types';

export const GET: RequestHandler = async ({ url, fetch, setHeaders }) => {
	try {
		// check if query is present for page and provider
		const id = url.searchParams.get('id');
		const provider = url.searchParams.get('provider') || 'zoro';

		const cached = await redis.get(`id=${id}:${provider}`);
		if (cached) {
			console.log(`Cached data found for ${id} from ${provider}`);
			const ttl = await redis.ttl('info');
			setHeaders({ 'cache-control': `max=age=${ttl}` });
      
			return json(JSON.parse(cached) as ApiResponse) ;

		} else {
			console.log(`Cached data not found for id=${id}:${provider}`);

			const response = await fetch(
				`https://api.consumet.org/meta/anilist/info/${id}?provider=zoro`
			);
			const data = await response.json();
      
			redis.set(`id=${id}:${provider}`, JSON.stringify(data), 'EX', 60 * 60 * 24); // 1 day cache
      
			return json(data as ApiResponse);
		}
	} catch (error) {
		console.error(error);
		return json(`failed to fetch data for that anime \n ${(error as Error).message}`);
	}
};
