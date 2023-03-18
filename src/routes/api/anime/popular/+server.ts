import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import type { Data } from'$lib/types';

export const GET: RequestHandler = async ({fetch}) => {
  try {
    const response = await fetch(`https://api.consumet.org/meta/anilist/popular`);
    const data = await response.json();
    return json(data as Data);
  } catch (error) {
    console.error(error);
    return json({ error: 'Failed to fetch data.' }, { status: 500 });
  }
}