import type { PageServerLoad } from './$types';
import { json } from '@sveltejs/kit';
export const load: PageServerLoad = async ({ params, fetch }) => {
  const [trending, popular, recent] = await Promise.all([
    fetch('/api/anime/anifox/trending'),
    fetch('/api/anime/anifox/popular'),
    fetch('/api/anime/anifox/recent-episodes')
  ]);
  return {
    
      trending: await trending.json(),
      popular: await popular.json(),
      recent: await recent.json()
    
  };
 
}