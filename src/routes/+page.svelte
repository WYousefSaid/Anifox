<script lang="ts">
	import Slider from '$lib/components/slider.svelte';

	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	// import type { Data } from'$lib/types';
	// export let data: Data;
	import '@splidejs/svelte-splide/css';
	
	export let data;
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
	class="flex flex-auto flex-col-reverse lg:flex-row-reverse max-w-full  bg-primary"
>
	<div class="flex-none lg:flex flex-col w-full lg:w-80 xl:w-96 p-4 lg:pr-8 bg-primary">
		<!-- Placeholder -->
		<div
			class="flex flex-col rounded-3xl bg-primary  text-gray-400 "
		>
			<div class="flex  w-full justify-between mb-2">
				<h2 class="text-white font-gothamMedium text-xl">Recent Episodes</h2>
				<a
					data-sveltekit-preload-code="hover"
					href="javascript:void(0)"
					class="group flex items-center space-x-1 text-sm font-gotham transition dark:text-slate-400 dark:hover:text-white active:text-slate-400"
				>
					<span>See All</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="w-5 h-5 opacity-50 transition ease-out group-hover:opacity-100 group-active:translate-x-2"
					>
						<path
							fill-rule="evenodd"
							d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			</div>
			{#each data.recent.slice(0,3) as item}
			
			<div id="recent-container" class="mb-2 relative">
				<span class="absolute bg-blue-700 font-gothamBook text-xs z-20 rounded-r-sm text-white py-[2px] px-2 bottom-6">New</span>
				<div id="box" class="w-full flex  items-center h-32 bg-secondary p-2 rounded-2xl">
					
					<div class="info  flex">
						<a href="/watch/{item.id}" data-sveltekit-preload-data>
						<img
							src="{item.image}"
							alt=""
							class="h-24 w-32 object-cover  rounded-3xl"
						/>
					</a>
						<div class="flex flex-col pl-2 justify-between font-gotham text-xs w-full p-1">
							<div class="flex justify-between pr-2 ">
								<a href="/watch/{item.id}" data-sveltekit-preload-data>
						<h1 class="font-gothamMedium line-clamp-2 text-white text-sm">{item.title.english}</h1>
					</a>
						<div class="flex items-center p-1 rounded-xl text-sm  h-5 bg-slate-500 opacity-80 text-white">
							{item.rating}%<svg
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
					<h1 class="text-sm w-full line-clamp-2">{item.episodeTitle}</h1>
					<div class="flex justify-between w-full">
						<span class="text-ascendSecondary">Episode {item.episodeNumber}</span>
						
					</div>

					</div>
					</div>
				</div>
			</div>
			{/each}
			<div class="flex  w-full justify-between mb-2">
				<h2 class="text-white font-gothamMedium text-xl">Best Upcomming</h2>
				<a
					data-sveltekit-preload-code="hover"
					href="javascript:void(0)"
					class="group flex items-center space-x-1 text-sm font-gotham transition dark:text-slate-400 dark:hover:text-white active:text-slate-400"
				>
					<span>See All</span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						class="w-5 h-5 opacity-50 transition ease-out group-hover:opacity-100 group-active:translate-x-2"
					>
						<path
							fill-rule="evenodd"
							d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
							clip-rule="evenodd"
						/>
					</svg>
				</a>
			</div>
			{#each data.upcoming as item}
			<nav class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-1 gap-4 lg:gap-8 ">
				
					<a
						data-sveltekit-preload-code="hover"
						href="/anime/id/{item.id}"
						class="group relative overflow-hidden aspect-w-16 aspect-h-10 bg-black/25 rounded-2xl transition hover:ring-4 hover:ring-orange-500/50 active:opacity-75 active:ring-orange-500/25 mb-2"
					>
						<img
							class="object-cover rounded-2xl h-full opacity-100 transform transition duration-300 ease-out group-hover:scale-105 group-focus:scale-105 group-focus-within:scale-105"
							src={item.image}
							alt="trending anime"
							loading="lazy"
						/>

						
					</a>
					<!-- END Movie -->
			</nav>
			
							<div class="flex items-end justify-between space-x-2 mb-2 border-b border-themeText w-full
							">
								<div class="space-y-1 w-full">
									<h3 class="text-sm  xl:text-[15px] font-gotham   text-white ">
										{item.title.english || item.title.romaji}
									</h3>
									<section class="flex justify-between w-full text-sm font-gothamMedium text-themeText">
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
	<div class="flex-grow flex flex-col max-w-10xl rounded-3xl  p-4 lg:pl-8 lg:py-4 w-full">
		<!--

      ADD YOUR MAIN CONTENT BELOW

      -->

		<!-- Placeholder -->
		<div
			class=" flex flex-auto min-w-full flex-col rounded-3xl bg-primary     border-gray-200 text-gray-400 "
		>
			<Slider slide={data.trending} />

			<section class="space-y-6 py-6 px-2 text-themeText  w-full  container">
				<div class="flex items-center justify-between ">
					<h2 class="text-white font-gothamMedium text-xl">Trending Anime</h2>
					<a
						data-sveltekit-preload-code="hover"
						href="javascript:void(0)"
						class="group flex items-center space-x-1 text-sm font-gotham transition dark:text-slate-400 dark:hover:text-white active:text-slate-400"
					>
						<span>See All</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							class="w-5 h-5 opacity-50 transition ease-out group-hover:opacity-100 group-active:translate-x-2"
						>
							<path
								fill-rule="evenodd"
								d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
								clip-rule="evenodd"
							/>
						</svg>
					</a>
				</div>
				<nav class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 ">
					<!-- Movie -->
					<!-- lol -->
					{#each data.trending.slice(0, 3) as card}
						<a
							data-sveltekit-preload-code="hover"
							href="/watch/{card.id}"
							class="group relative overflow-hidden aspect-w-16 aspect-h-10 bg-black/25 rounded-2xl transition hover:ring-4 hover:ring-orange-500/50 active:opacity-75 active:ring-orange-500/25"
						>
							<img
								class="object-cover rounded-2xl h-full opacity-100 transform transition duration-300 ease-out group-hover:scale-105 group-focus:scale-105 group-focus-within:scale-105"
								src={card.image}
								alt="trending anime"
								loading="lazy"
							/>

							<div
								class="absolute inset-0 flex flex-col justify-between bg-gradient-to-b from-transparent  via-black/60 to-black"
							>
								<div class="p-4 flex items-end justify-start space-x-2" />
								<div class="px-4 py-5 flex items-end justify-between space-x-2">
									<div class="space-y-1">
										<h3 class="text-sm  xl:text-[15px] font-gotham   text-white w-[99%]">
											{card.title.english}
										</h3>
										<section class="text-sm font-gothamMedium w-max text-themeText">
											{card.releaseDate}
											{#each card.genres.slice(0, 3) as genre}
												<div
													class="font-semibold inline-flex px-2 py-[1px] leading-4 text-xs rounded text-ascend ml-2 bg-secondary"
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
											class="hi-mini hi-play w-5 h-5 translate-x-0.5"
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
			<section class="space-y-6 py-4 px-2 text-white  container">
				<nav class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-20 ">
					<div
						class="bg-secondary flex flex-col text-2xl font-gotham overflow-clip bg-black/25 rounded-[40px] p-4 gap-2"
					>
						<div class="h-16  flex  justify-between  mx-auto dark:text-white">Most Popular</div>
						{#each data.popular.slice(3, 8) as item}
							<div class="t">
								<div class=" px-5  flex mb-2 ">
									<div class="min-w-30 h-32 ">
										<a data-sveltekit-preload-data="hover" class="" href="/watch/{item.id}">
											<img src={item.image} alt="" loading="lazy" class="min-w-30 h-32" />
										</a>
									</div>
									<div class="mx-2 flex flex-col justify-between">
										<div class="top-part">
											<div
												class="font-gothamMedium text-sm lg:text-sm hover:text-gray-400  line-clamp-1"
											>
												<a data-sveltekit-preload-data="hover" href="/watch/{item.id}" class="  "
													>{item.title.english}</a
												>
											</div>
											<div class="flex items-center text-sm">
												{item.rating}%
												<svg
													aria-hidden="true"
													class="w-9 h-8 text-ascend"
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
										<div id="under-section " class="text-sm  text-gray-300 flex gap-2">
											<span>{item.duration} min</span><span>{item.totalEpisodes} Ep</span><span
												>{item.status}</span
											>
										</div>
									</div>
								</div>
								<div class="border-b-[0.5px] relative mx-auto w-[615px] m-2 border-gray-700" />
							</div>
						{/each}
					</div>
					<div
						class="bg-secondary flex flex-col  text-2xl font-gotham overflow-clip bg-black/25 rounded-[40px] p-4 gap-2"
					>
						<div class="h-16  flex justify-center    dark:text-white">Top Airing</div>
						{#each data.trending.slice(3, 8) as item}
							<div class="t">
								<div class=" px-5  flex mb-2 ">
									<div class="min-w-30 h-32">
										<a data-sveltekit-preload-data="hover" class="" href="/watch/{item.id}">
											<img src={item.image} alt="" loading="lazy" class="min-w-30 h-32" />
										</a>
									</div>
									<div class="mx-2 flex flex-col justify-between">
										<div class="top-part">
											<div
												class="font-gothamMedium text-sm lg:text-sm hover:text-gray-400  line-clamp-1"
											>
												<a data-sveltekit-preload-data="hover" href="/watch/{item.id}" class="  "
													>{item.title.english}</a
												>
											</div>
											<div class="flex items-center text-sm">
												{item.rating}%
												<svg
													aria-hidden="true"
													class="w-9 h-8 text-ascend"
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
										<div id="under-section " class="text-sm  text-gray-300 flex gap-2">
											<span>{item.duration} min</span><span>{item.totalEpisodes} Ep</span><span
												>{item.status}</span
											>
										</div>
									</div>
								</div>
								<div class="border-b-[0.5px] relative mx-auto w-[615px] m-2 border-gray-700" />
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
    <div class="text-center flex flex-col md:text-left md:flex-row md:justify-between text-sm max-w-10xl mx-auto px-4 lg:px-8 w-full">
      <div class="pt-4 pb-1 md:pb-4">
        <a href="https://tailkit.com" target="_blank" class="font-medium text-rose-600 hover:text-rose-400">Tailkit</a> ©
      </div>
      <div class="pb-4 pt-1 md:pt-4 inline-flex items-center justify-center">
        <span>Crafted with</span>
        <svg class="hi-solid hi-heart inline-block w-4 h-4 mx-1 text-red-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/></svg>
        <span>by <a href="https://pixelcave.com" target="_blank" class="font-medium text-rose-600 hover:text-rose-400">pixelcave</a></span>
      </div>
    </div>
  </footer> -->
<!-- END Page Footer -->
