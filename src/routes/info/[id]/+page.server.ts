import type { PageServerLoad } from './$types';
import type { ApiResponse } from '$lib/types';
export const load = (async ({fetch, params})  => {
	const response = await fetch(`/api/anime/anifox/info?id=${params.id}&provider=zoro`);
	const data = await response.json();
	
	
	return {
		info : data as ApiResponse
	};
}) satisfies PageServerLoad;
