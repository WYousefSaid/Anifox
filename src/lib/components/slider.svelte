<script lang="ts">
	import { Splide, SplideSlide, SplideTrack } from '@splidejs/svelte-splide';
	import type { Data } from '$lib/types';
	// export let slide: Data;
	import '@splidejs/svelte-splide/css';
	export let slide: any;
</script>

<div class="container relative h-min rounded-3xl  lg:block">
	<Splide
		hasTrack={true}
		options={{
			type: 'loop',
			perPage: 1,
			omitEnd: true,
			rewind: true,

			perMove: 1,
			gap: '1rem',
			autoplay: true,
			pauseOnHover: true,
			resetProgress: false,
			interval: 4500
		}}
		aria-label="Anime Covers"
	>
		{#each slide as item}
			<SplideSlide>
				<div class="relative rounded-3xl">
					<img
						src={item.cover}
						alt=""
						
						class="h-96 rounded-3xl object-cover w-full"
						srcset=""
					/>
					<div class="absolute text-2xl text-red-400 inset-0">
						<div
							class="absolute inset-0 rounded-xl  flex flex-col justify-between bg-gradient-to-l from-transparent via-primary/40 to-primary/90"
						>
							<div class="text-white  m-auto ml-16 ">
								<article class="prose  lg:prose-base text-slate-400 font-gothamBook">
									<h1 class="text-slate-100 m-0 p-0 line-clamp-2 font-gothamBold">
										{item.title.english}
									</h1>

									<span>
										<div
											class="flex items-center gap-2 m-0 p-0 text-sm lg:text-base font-gothamBookitalic italic"
										>
											<div class="flex items-center gap-1">
												<svg
													class="hi-solid hi-clock inline-block w-4 h-4 opacity-75"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
													><path
														fill-rule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
														clip-rule="evenodd"
													/></svg
												>

												<span>{item.duration}m</span>
											</div>
											<div class="flex items-center gap-1 font-gothamBookitalic italic">
												<svg
													class="hi-solid hi-calendar inline-block w-4 h-4 opacity-75"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
													><path
														fill-rule="evenodd"
														d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
														clip-rule="evenodd"
													/></svg
												>
												<span>{item.releaseDate}</span>
											</div>
											<div class="flex items-center gap-1 font-gothamBookitalic italic">
												<svg
													class="hi-solid hi-play inline-block w-4 h-4 opacity-75"
													fill="currentColor"
													viewBox="0 0 20 20"
													xmlns="http://www.w3.org/2000/svg"
													><path
														fill-rule="evenodd"
														d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
														clip-rule="evenodd"
													/></svg
												>
												<span>{item.type}</span>
											</div>
										</div>
									</span>
									<p class="w-[650px] text-left text-slate-100 leading-5 opacity-90 line-clamp-4">
										{item.description.replace(/<[^>]*>?/gm, '')}
									</p>
									<!-- ... -->

									<div class="relative w-max">
										<div class="absolute inset-0   blur border-b-8 border-ascend " />
										<a
											href="javascript:void(0)"
											class="inline-flex justify-center items-center space-x-2 border font-medium font-gothamBook rounded-lg px-4 py-2 leading-6 border-ascend bg-ascend text-white relative hover:text-white hover:bg-orange-600 hover:border-orange-600 focus:ring focus:ring-orange-400 focus:ring-opacity-50 active:bg-ascend active:border-ascend dark:focus:ring-orange-400 dark:focus:ring-opacity-90"
										>
											<svg
												class="hi-outline hi-play inline-block w-6 h-6"
												xmlns="http://www.w3.org/2000/svg"
												fill="none"
												viewBox="0 0 24 24"
												stroke-width="1.5"
												stroke="currentColor"
												aria-hidden="true"
												><path
													stroke-linecap="round"
													stroke-linejoin="round"
													d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z"
												/></svg
											>Watch Now
										</a>
									</div>
								</article>
							</div>
						</div>
					</div>
				</div>
			</SplideSlide>
		{/each}
	</Splide>
</div>
