import type { PageServerLoad } from './$types';
import { json } from '@sveltejs/kit';
export const load: PageServerLoad = async ({ params, fetch }) => {
  const [trending, popular, recent] = await Promise.all([
    fetch('/api/anime/trending'),
    fetch('/api/anime/popular'),
    fetch('/api/anime/recent-episodes')
  ]);
  return {
    data: {
      trending: await trending.json(),
      popular: await popular.json(),
      recent: await recent.json()
    }
  };
 
}