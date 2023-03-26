<script lang="ts">
	import '../app.css';
	import { state } from '../stores';
	import type { Data } from '$lib/types';
	import { clickOutside } from '$lib/outside.js';
	$: $state = $state;
	let value = '';
	let inputElement: HTMLInputElement;
	$: console.log(value);
	let showSearching = true;
	let isResults = true;
	let queryTimeoutId: any;
	$: value;
	$: onQueryChange(value);
	let data: Data[] = [];
	$: data;
	$: console.log(data);
	// WOW
	function onQueryChange(query: string) {
		if (query.length >= 3) {
			if (query) {
				if (queryTimeoutId) {
					clearTimeout(queryTimeoutId);
				}
				queryTimeoutId = setTimeout(async () => {
					doSearch(query);
				}, 1000);
			}
		}
	}
	async function doSearch(query: string) {
		try {
			const response = await fetch('/api/anime/anifox/search?query=' + query);
			let res = await response.json();
			data = res.results;
		} catch (error) {
			console.error('Error fetching data from API:', error);
		}
	}
</script>

<!-- Page Container -->

<div
	id="page-container"
	class="flex flex-col mx-auto w-full min-h-screen bg-gray-100 lg:pl-64"
	class:lg:pl-24={!$state}
	class:lg:pl-64={$state}
>
	<header
		id="page-header"
		class="flex flex-none justify-between items-center h-16 bg-primary shadow-sm  pl-10 font-gothamBook"
	>
		<div class="nav flex gap-2 min-w-max font-gothamBook text-lg">
			<a
				href="#"
				class="text-themeText transition group focus:text-ascend hover:text-ascend transition duration-300 "
			>
				<span>Home</span>
				<span
					class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-ascend"
				/>
			</a>
			<a
				href="#"
				class="text-themeText transition group focus:text-ascend hover:text-ascend transition duration-300 "
			>
				<span>Movies</span>
				<span
					class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-ascend"
				/>
			</a>
			<a
				href="#"
				class="text-themeText transition group focus:text-ascend hover:text-ascend transition duration-300 "
			>
				<span>New Releases</span>
				<span
					class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-ascend"
				/>
			</a>
			<a
				href="#"
				class="text-themeText transition group focus:text-ascend hover:text-ascend transition duration-300 "
			>
				<span>Community</span>
				<span
					class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-ascend"
				/>
			</a>
		</div>
		<div class="mr-4 flex gap-8">
			<div class="flex items-center justify-center ">
				<div class="flex relative ">
					<input
						type="text"
						on:click={() => {
							showSearching = true;
						}}
						bind:this={inputElement}
						on:input={() => {
							value = inputElement.value;
						}}
						class="px-4 bg-secondary rounded-r-sm text-themeText  focus:outline-none focus:border-none focus:ring-1 focus:ring-ascend rounded-l-md py-2 w-80"
						placeholder="Search..."
					/>
					<div class="relative ">
						<div class="absolute inset-0 bg-ascend blur " />
						<button
							class="flex relative items-center h-full  justify-center px-4 rounded-r-md bg-ascend shadow-xl"
						>
							<svg
								class="w-6 h-6 text-slate-200"
								fill="currentColor"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
							>
								<path
									d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
								/>
							</svg>
						</button>
					</div>
					{#if showSearching && isResults && data.length > 0}
						<div
							class="w-full absolute rounded-b-md bottom--10 mt-11 z-100 bg-secondary  "
							use:clickOutside
							on:outclick={() => {
								showSearching = false;
							}}
						>
							<ul class="font-gotham ">
								{#each data.slice(0, 4) as item}
									<a href="#" class="">
										<li class="w-full flex h-28  border-ascend">
											<img
												class="p-2 w-20 object-cover"
												src={item.image}
												alt="anime poster"
												srcset=""
											/>
											<div class="info  w-full flex flex-col justify-between p-2">
												<h1 class="text-slate-200 font-gothamMedium line-clamp-1 text-base">
													{item.title.userPreferred}
												</h1>
												<h1 class="text-slate-400 text-xs">{item.title.english}</h1>
												<div class="w-full">
													<ul class="flex gap-2 w-full  items-center text-slate-500 text-sm">
														<li>{item.totalEpisodes} Ep</li>
														<i class="dot w-1 h-1 rounded-full bg-themeText" />

														<li class="text-ascendSecondary">{item.type}</li>
														<i class="dot w-1 h-1 rounded-full bg-themeText" />

														<li>{item.releaseDate}</li>
													</ul>
												</div>
											</div>
										</li>
										<div class="border-[0.5px] border-dashed border-themeText w-full" />
									</a>
								{/each}
							</ul>
						</div>
					{/if}
				</div>
			</div>
			<button>
				<svg
					class="hi-outline hi-bell inline-block w-6 h-6 stroke-slate-200 hover:stroke-slate-300"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke-width="1.5"
					stroke="currentColor"
					aria-hidden="true"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
					/></svg
				>
			</button>
			<button>
				<div
					class="inline-flex items-center justify-center text-xs w-12 h-12 rounded-full bg-secondary text-gray-200 dark:text-gray-500 dark:bg-gray-700"
				>
					BETA
				</div>
			</button>
		</div>
	</header>
	<!-- END Page Header -->

	<slot />
</div>
