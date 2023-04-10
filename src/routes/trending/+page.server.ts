import type { PageServerLoad } from './$types';
import type { Main } from '$lib/types';

export const load = (async ({fetch, url})  => {
	const page = url.searchParams.get('page') || '1';
	const response = await fetch(`/api/anime/anifox/trending?page=${page}`);
	const data = await response.json();
	
	
	return {
		trending : data  as Main
	};
}) satisfies PageServerLoad;
