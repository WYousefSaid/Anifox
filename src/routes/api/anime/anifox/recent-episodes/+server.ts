import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import type { Data } from'$lib/types';
import { redis } from '$lib/server/redis';

export const GET: RequestHandler = async ({url,fetch,setHeaders}) => {

  try {
    const page = url.searchParams.get('page') || '1';
    const cached = await redis.get('recent');
    if (cached) {
      console.log('Cached data found for recent episodes anime');
      const ttl = await redis.ttl('recent'); 
      setHeaders({"cache-control": `max=age=${ttl}`});
      return json(JSON.parse(cached) as Data);
    }
    else{
    console.log('Cached data not found for recent episodes');

    const response = await fetch(`https://api.consumet.org/meta/anilist/recent-episodes?page=${page}&provider=zoro`);
    const data = await response.json();
    redis.set('recent', JSON.stringify(data.results), 'EX', 60 * 60 * 24); // 1 day cache
    return json(data as Data);
  }
  } catch (error) {
    console.error(error);
    return json(`failed to fetch data for recent episodes \n ${(error as Error).message}`);
  }
}