<script lang="ts">
	import Slider from '$lib/components/slider.svelte';

	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	// import type { Data } from'$lib/types';
	// export let data: Data;
	import '@splidejs/svelte-splide/css';

	export let data;
	$: console.log(data);
</script>

<!-- 
            Visibility
              Closed        'hidden'
              Opened        '' (no class)

            Show/Hide with transitions
              enter         'transition ease-out duration-150'
              enter-start   'transform opacity-0 scale-75'
              enter-end     'transform opacity-100 scale-100'
              leave         'transition ease-in duration-100'
              leave-start   'transform opacity-100 scale-100'
              leave-end     'transform opacity-0 scale-75'
          -->
<!--
  Sidebar on Desktop
    Closed '' (no class)
    Opened 'lg:pl-64'
-->

<!-- Page Sidebar -->
<!--
    Sidebar on Mobile
      Closed '-translate-x-full'
      Opened 'translate-x-0'

    Sidebar on Desktop
      Closed 'lg:-translate-x-full'
      Opened 'lg:translate-x-0'
  -->

<!-- Page Header -->

<!-- Page Content -->
<main
	id="page-content"
	class="flex max-w-full flex-auto flex-col-reverse bg-primary lg:flex-row-reverse"
>
	<div class="w-full flex-none flex-col p-4 bg-primary lg:flex lg:w-80 lg:pr-8 xl:w-96">
		<!-- Placeholder -->
		<div class="flex flex-col rounded-3xl text-gray-400 bg-primary">
			<div class="mb-2 flex w-full justify-between">
				<h2 class="text-xl text-white font-gothamMedium">Recent Episodes</h2>
				<a
					data-sveltekit-preload-code="hover"
					href="javascript:void(0)"
					class="flex items-center text-sm transition group space-x-1 font-gotham active:text-slate-400 dark:text-slate-400 dark:hover:text-white"
				>
					<span>See All</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="h-5 w-5 group-active:translate-x-2 opacity-50 transition ease-out group-hover:opacity-100"
					>
						<path
							fill-rule="evenodd"
							d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			</div>
			{#each data.recent.results.slice(0, 3) as item}
				<div id="recent-container" class="relative mb-2">
					<span
						class="absolute bottom-6 z-20 rounded-r-sm bg-blue-700 px-2 text-xs text-white font-gothamBook py-[2px]"
						>New</span
					>
					<div id="box" class="flex h-32 w-full items-center rounded-2xl p-2 bg-secondary">
						<div class="flex info">
							<a href="/info/{item.id}" data-sveltekit-preload-data>
								<img src={item.image} alt="" class="h-24 w-32 rounded-3xl object-cover" />
							</a>
							<div class="flex w-full flex-col justify-between p-1 pl-2 text-xs font-gotham">
								<div class="flex justify-between pr-2">
									<a href="/info/{item.id}" data-sveltekit-preload-data>
										<h1 class="text-sm text-white font-gothamMedium line-clamp-2">
											{item.title.english ?? item.title.userPreferred}
										</h1>
									</a>
									<div
										class="flex h-5 items-center rounded-xl bg-slate-500 p-1 text-sm text-white opacity-80"
									>
										{item.rating/10}<svg
											aria-hidden="true"
											class="h-4 w-4 text-ascend"
											fill="currentColor"
											viewBox="0 0 20 20"
											xmlns="http://www.w3.org/2000/svg"
											><title>First star</title><path
												d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
											/></svg
										>
									</div>
								</div>
								<h1 class="w-full text-sm line-clamp-2">{item.episodeTitle}</h1>
								<div class="flex w-full justify-between">
									<span class="text-ascendSecondary">Episode {item.episodeNumber}</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			{/each}
			<div class="mb-2 flex w-full justify-between">
				<h2 class="text-xl text-white font-gothamMedium">Best Upcomming</h2>
				<a
					data-sveltekit-preload-code="hover"
					href="javascript:void(0)"
					class="flex items-center text-sm transition group space-x-1 font-gotham active:text-slate-400 dark:text-slate-400 dark:hover:text-white"
				>
					<span>See All</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="h-5 w-5  group-active:translate-x-2 opacity-50 transition ease-out group-hover:opacity-100"
					>
						<path
							fill-rule="evenodd"
							d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			</div>
			{#each data.upcoming.results as item}
				<nav class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1 lg:gap-8">
					<a
						data-sveltekit-preload-code="hover"
						href="/info/{item.id}"
						class="relative mb-2 overflow-hidden rounded-2xl bg-black/25 transition group aspect-w-16 aspect-h-10 hover:ring-4 hover:ring-orange-500/50 active:opacity-75 active:ring-orange-500/25"
					>
						<img
							class="h-full group-focus-within:scale-105 transform rounded-2xl object-cover opacity-100 transition duration-300 ease-out group-hover:scale-105 group-focus:scale-105"
							src={item.image}
							alt="trending anime"
							loading="lazy"
						/>
					</a>
				</nav>

				<div
					class="flex items-end justify-between space-x-2 mb-2 border-b border-themeText w-full
							"
				>
					<div class="w-full space-y-1">
						<h3 class="text-sm text-white font-gotham xl:text-[15px]">
							{item.title.english || item.title.romaji}
						</h3>
						<section class="flex w-full justify-between text-sm font-gothamMedium text-themeText">
							<span> Year: {item.releaseDate}</span>
							<div>status: {item.status}</div>
						</section>
					</div>
				</div>
			{/each}
		</div>
	</div>
	<!-- END Side Content -->

	<!-- Main Content -->
	<div class="flex w-full flex-grow flex-col rounded-3xl p-4 max-w-10xl lg:py-4 lg:pl-8">
		<!--

      ADD YOUR MAIN CONTENT BELOW

      -->

		<!-- Placeholder -->
		<div
			class="flex min-w-full flex-auto flex-col rounded-3xl border-gray-200 text-gray-400 bg-primary"
		>
			<Slider slide={data.trending.results} />

			<section class="container w-full px-2 py-6 space-y-6 text-themeText">
				<div class="flex items-center justify-between">
					<h2 class="text-xl text-white font-gothamMedium">Trending Anime</h2>
					<a
						data-sveltekit-preload-code="hover"
						href="javascript:void(0)"
						class="flex items-center text-sm transition group space-x-1 font-gotham active:text-slate-400 dark:text-slate-400 dark:hover:text-white"
					>
						<span>See All</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="h-5 w-5 group-active:translate-x-2 opacity-50 transition ease-out group-hover:opacity-100"
						>
							<path
								fill-rule="evenodd"
								d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</div>
				<nav class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
					<!-- Movie -->
					<!-- lol -->
					{#each data.trending.results.slice(0, 3) as card}
						<a
							data-sveltekit-preload-code="hover"
							href="/info/{card.id}"
							class="relative overflow-hidden rounded-2xl bg-black/25 transition group aspect-w-16 aspect-h-10 hover:ring-4 hover:ring-orange-500/50 active:opacity-75 active:ring-orange-500/25"
						>
							<img
								class="h-full group-focus-within:scale-105 transform rounded-2xl object-cover opacity-100 transition duration-300 ease-out group-hover:scale-105 group-focus:scale-105"
								src={card.image}
								alt="trending anime"
								loading="lazy"
							/>

							<div
								class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-transparent via-black/60 to-black rounded-[15px]"
							>
								<div class="flex items-end justify-start p-4 space-x-2" />
								<div class="flex items-end justify-between px-4 py-5 space-x-2">
									<div class="space-y-1">
										<h3 class="text-sm text-white font-gotham w-[99%] xl:text-[15px]">
											{card.title.english}
										</h3>
										<section class="w-max text-sm font-gothamMedium text-themeText">
											{card.releaseDate}
											{#each card.genres.slice(0, 3) as genre}
												<div
													class="ml-2 inline-flex rounded px-2 text-xs font-semibold leading-4 py-[1px] text-ascend bg-secondary"
												>
													{genre}
												</div>
											{/each}
										</section>
									</div>

									<!-- <div
										class=" hidden xl:flex absolute right-3 items-center justify-center w-10 h-10 rounded-full transition text-slate-400 bg-secondary group-hover:bg-[#312e30] group-hover:text-white group-hover:scale-110 group-active:scale-100"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill="#007CFA"
											class="h-5 w-5 hi-mini hi-play translate-x-0.5"
										>
											<path
												d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
											/>
										</svg>
									</div> -->
								</div>
							</div>
						</a>
						<!-- END Movie -->
					{/each}
				</nav>
			</section>
			<section class="container px-2 py-4 text-white space-y-6">
				<nav class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 lg:gap-20">
					<div
						class="flex flex-col gap-2 overflow-clip bg-black/25 p-4 text-2xl bg-secondary font-gotham rounded-[40px]"
					>
						<div class="mx-auto flex h-16 justify-between dark:text-white">Most Popular</div>
						{#each data.popular.results.slice(3, 8) as item}
							<div class="t">
								<div class="mb-2 flex px-5">
									<div class="h-32 min-w-30">
										<a data-sveltekit-preload-data="hover" class="" href="/info/{item.id}">
											<img src={item.image} alt="" loading="lazy" class="h-32 min-w-30" />
										</a>
									</div>
									<div class="mx-2 flex flex-col justify-between">
										<div class="top-part">
											<div
												class="text-sm font-gothamMedium line-clamp-1 hover:text-gray-400 lg:text-sm"
											>
												<a data-sveltekit-preload-data="hover" href="/info/{item.id}" class=""
													>{item.title.english}</a
												>
											</div>
											<div class="flex items-center text-sm">
												{item.rating / 10}
												<svg
													aria-hidden="true"
													class="h-7 w-7 text-ascend"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
													><title>First star</title><path
														d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
													/></svg
												>

												<!-- <p class="ml-2 text-sm font-bold text-gray-100">{parseInt(item.mappings.kitsu.attributes.averageRating)}%</p> -->
											</div>
										</div>
										<div id="under-section " class="flex gap-2 text-sm text-gray-300">
											<span>{item.duration} min</span><span>{item.totalEpisodes} Ep</span><span
												>{item.status}</span
											>
										</div>
									</div>
								</div>
								<div class="relative m-2 mx-auto border-gray-700 border-b-[0.5px] w-[615px]" />
							</div>
						{/each}
					</div>
					<div
						class="flex flex-col gap-2 overflow-clip bg-black/25 p-4 text-2xl bg-secondary font-gotham rounded-[40px]"
					>
						<div class="flex h-16 justify-center dark:text-white">Top Airing</div>
						{#each data.trending.results.slice(3, 8) as item}
							<div class="t">
								<div class="mb-2 flex px-5">
									<div class="h-32 min-w-30">
										<a data-sveltekit-preload-data="hover" class="" href="/info/{item.id}">
											<img src={item.image} alt="" loading="lazy" class="h-32 min-w-30" />
										</a>
									</div>
									<div class="mx-2 flex flex-col justify-between">
										<div class="top-part">
											<div
												class="text-sm font-gothamMedium line-clamp-1 hover:text-gray-400 lg:text-sm"
											>
												<a data-sveltekit-preload-data="hover" href="/info/{item.id}" class=""
													>{item.title.english ?? item.title.userPreferred}</a
												>
											</div>
											<div class="flex items-center text-sm">
												{item.rating / 10}
												<svg
													aria-hidden="true"
													class="h-7 w-7 text-ascend"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
													><title>First star</title><path
														d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
													/></svg
												>

												<!-- <p class="ml-2 text-sm font-bold text-gray-100">{parseInt(item.mappings.kitsu.attributes.averageRating)}%</p> -->
											</div>
										</div>
										<div id="under-section " class="flex gap-2 text-sm text-gray-300">
											<span>{item.duration} min</span><span>{item.totalEpisodes} Ep</span><span
												>{item.status}</span
											>
										</div>
									</div>
								</div>
								<div class="relative m-2 mx-auto border-gray-700 border-b-[0.5px] w-[615px]" />
							</div>
						{/each}
					</div>
				</nav>
			</section>
		</div>

		<!--

      ADD YOUR MAIN CONTENT ABOVE

      -->
	</div>
	<!-- END Main Content -->
</main>
<!-- END Page Content -->

<!-- Page Footer -->
<!-- <footer id="page-footer" class="flex flex-none items-center bg-white">
    <div class="mx-auto flex w-full flex-col px-4 text-center text-sm max-w-10xl md:flex-row md:justify-between md:text-left lg:px-8">
      <div class="pt-4 pb-1 md:pb-4">
        <a href="https://tailkit.com" target="_blank" class="font-medium text-rose-600 hover:text-rose-400">Tailkit</a> ©
      </div>
      <div class="inline-flex items-center justify-center pt-1 pb-4 md:pt-4">
        <span>Crafted with</span>
        <svg class="mx-1 inline-block h-4 w-4 text-red-600 hi-solid hi-heart" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/></svg>
        <span>by <a href="https://pixelcave.com" target="_blank" class="font-medium text-rose-600 hover:text-rose-400">pixelcave</a></span>
      </div>
    </div>
  </footer> -->
<!-- END Page Footer -->
