import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import type { Data } from'$lib/types';
import { redis } from '$lib/server/redis';
import { error } from '@sveltejs/kit';
export const GET: RequestHandler = async ({url,fetch,setHeaders}) => {

  try {
    const page = url.searchParams.get('page') || '1';
    const query = url.searchParams.get('query') || '';
    const cached = await redis.get(`${query}`);
    if (cached) {
      console.log(`Cached data found for ${query}`);
      const ttl = await redis.ttl(`${query}`); 
      setHeaders({"cache-control": `max=age=${ttl}`});
      return json(JSON.parse(cached) as Data);
    }
    else{
    console.log(`Cached data not found for ${query}`);

    const response = await fetch(`https://api.consumet.org/meta/anilist/${query}?page=${page}`);
    const data = await response.json();
    redis.set(`${query}`, JSON.stringify(data.results), 'EX', 60 * 60 * 24); // 1 day cache
    return json(data as Data);
  }
  } catch (error) {
    console.error(error);
    return json(`failed to fetch data for ur search query \n ${(error as Error).message}`);
  }
}