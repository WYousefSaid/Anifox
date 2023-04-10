import type { PageServerLoad } from './$types';
import type { Info } from '$lib/types';
export const load = (async ({fetch, params})  => {
	const response = await fetch(`/api/anime/anifox/info?id=${params.id}&provider=zoro`);
	const data = await response.json();
	
	
	return {
		info : data as Info
	};
}) satisfies PageServerLoad;
