import { pb } from '$lib/db';
import type { PageServerLoad } from './$types';

export const load = (async () => {
  const recipes = await pb.collection('recipes').getList();

  return {
    recipes
  };
}) satisfies PageServerLoad;