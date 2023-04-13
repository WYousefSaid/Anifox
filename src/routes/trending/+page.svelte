<script lang="ts">
	import type { PageData } from './$types';

	export let data;
	// let Nextpageavaiable = true;
	// let page = 1;
	// let totalPage = 1;
	// function nextPage() {
	// 	if (Nextpageavaiable) {
	// 		page += 1;
	// 	}
	// }
	// function previousPage() {
	// 	if (page > 1) {
	// 		page -= 1;
	// 	}
	// }
	$: ({ trending } = data);
	$: console.log(data);
</script>
<div class="flex flex-wrap gap-2">

{#each trending.results as anime}
<a href="/info/{anime.id}">
		<div class="relative mb-28 h-56 w-44">
			<div class="relative overflow-hidden rounded-lg">
				<div class="absolute inset-0 bg-gradient-to-t from-zinc-800 to-transparent" />

				<img
					class="  	 w-44 object-cover"
					src="{anime.image}"
					alt=""
					
				/>
			</div>
			<div class="relative px-2 -mt-10">
				<div class="bg-secondary hover:bg-zinc-800 p-2 md:p-3 rounded-lg shadow-lg">
					<div class="flex items-baseline">
						<span
							class="bg-red-500 text-white text-xs px-2 inline-block rounded-full uppercase tracking-wide font-semibold"
							>Trending</span
						>
						<div
							class="ml-2 text-gray-600 text-xs uppercase font-semibold gap-[1px] items-center flex tracking-wide"
						>
							{anime.rating/10 ?? '?'}<svg
								aria-hidden="true"
								class="w-4 h-4 text-ascend"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
								><title>First star</title><path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
								/></svg
							>
						</div>
					</div>
					<h4 class="mt-1 text-xs md:text-sm font-gotham line-clamp-1 w-36 text-gray-100">
						{anime.title.english ?? anime.title.userPreferred}
						
					</h4>
					<div class="mt-1 text-xs font-gothamBook md:text-sm">
						<span class="text-gray-400">Genre:</span>
						<span class="ml-1 text-gray-300">{anime.genres[0]}</span>
						<span class="mt-1 text-gray-500">{anime.releaseDate}</span>
					</div>
					<div class="mt-3">
						<a
							href="info/{anime.id}"
							class="text-main/90 hover:text-ascend/80 font-semibold text-ascend text-xs md:text-sm transition-all duration-200 ease-in-out"
							>Watch now</a
						>
					</div>
				</div>
			</div>
		</div>
	</a>
{/each}
</div>
