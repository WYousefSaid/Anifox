<script lang="ts">
	import type { PageData } from './$types';

	export let data;
	$: data;
	$: ({ info } = data);
	let trailer = false;
	
</script>

<section>
	<div class="w-full   rounded-md" id="videoWrapper">
		{#if trailer && info.trailer.id !== undefined}
			<iframe
				src="https://www.youtube.com/embed/{info.trailer
					.id}?rel=0&cc_load_policy=1&iv_load_policy=3&fs=0&controls=0"
				frameborder="0"
				allowfullscreen
				class="w-full  rounded-md h-[335px]"
				title="A YouTube video"
			/>
		{:else}
			<div class="relative">
				<img
					src={info.cover}
					alt=""
					class="object-cover w-full opacity-80 h-[335px]  rounded-md"
					srcset=""
				/>
				<div
					class="absolute inset-0 rounded-md flex flex-col justify-between bg-gradient-to-b from-transparent via-primary/30 to-primary/30"
				/>
				<div class="absolute bottom-10 left-[43%] ">
					<button
						on:click={() => {
							trailer = true;
						}}
						class="text-white font-gothamBold  py-2 px-12 border-[1.9px] border-ascend rounded-xl backdrop-blur-sm flex  backdrop-brightness-125 hover:backdrop-brightness-150 focus:ring-1 focus:ring-ascend gap-2 justify-center items-center"
						><svg
							class="hi-mini fill-ascend hi-play inline-block w-3 h-3"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							><path
								d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
							/></svg
						>Trailer</button
					>
				</div>
				<div
					class="px-4 py-2 rounded-lg absolute bottom-10 left-4 backdrop-blur-sm backdrop-brightness-150 text-white flex justify-center  gap-1 font-gothamMedium"
				>
					<svg
						class="hi-mini hi-star fill-yellow-300 inline-block w-5 h-5"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 20 20"
						fill="currentColor"
						aria-hidden="true"
						><path
							fill-rule="evenodd"
							d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
							clip-rule="evenodd"
						/></svg
					>{info.rating / 10}
				</div>
			</div>
		{/if}
	</div>
</section>
<!--  -->
<section class="w-full  min-h-screen flex">
	<div class="min-h-full  p-10 w-[75%] border-r border-gray-800">
		<div class=" flex relative gap-5 ">
			<div class="">
				<img src={info.image} class="h-60 rounded-xl" alt="" srcset="" />
				<div class="text-slate-400 text-2xl font-gothamBook absolute -bottom-32">
					<div>{info.releaseDate}</div>
					<div>{info.duration} m</div>
					<div>PG13</div>
				</div>
			</div>
			<div class="py-3 flex flex-col justify-between">
				<div class="flex flex-col gap-2">
					<h1 class="text-white text-3xl font-gothamBook">
						{info?.title?.english ?? info?.title?.romaji}
					</h1>
					<ul class="flex gap-1 ">
						{#each info.genres as genre}
							<li class=" text-sm  text-slate-400 font-gothamBook">{genre},</li>
						{/each}
					</ul>
				</div>
				<div class="mb-4 flex gap-4">
					<div class="relative w-max">
						<div class="absolute inset-0   blur border-b-8 border-ascend " />
						<a
							href="/info/{info.id}"
							data-sveltekit-preload-data="hover"
							class="inline-flex justify-center items-center space-x-2 border  font-gothamBook rounded-lg px-8 py-2 leading-6 border-ascend bg-ascend text-white relative hover:text-white hover:bg-orange-600 hover:border-orange-600 focus:ring focus:ring-orange-400 focus:ring-opacity-50 active:bg-ascend active:border-ascend dark:focus:ring-orange-400 dark:focus:ring-opacity-90"
						>
							Watch
						</a>
					</div>
					<button class="px-4 py-1 bg-gray-800 opacity-80 rounded-lg "
						><svg
							class="hi-mini hi-plus-small fill-slate-200 inline-block w-7 h-7"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							><path
								d="M10.75 6.75a.75.75 0 00-1.5 0v2.5h-2.5a.75.75 0 000 1.5h2.5v2.5a.75.75 0 001.5 0v-2.5h2.5a.75.75 0 000-1.5h-2.5v-2.5z"
							/></svg
						></button
					>
				</div>
			</div>
		</div>
		<div class="flex mt-5">
			<div class="w-[80%] h-96   pl-28 pr-5 py-4  flex gap-5 flex-col">
				<h3 class="text-xl text-slate-100 font-gothamBook">Overview</h3>
				<p class="text-slate-200">{info.description.replace(/<[^>]*>?/gm, '')}</p>
			</div>
			<div class="w-[20%] h-96  flex flex-col">
				<h4 class="text-slate-100 font-gothamBook text-lg mt-4 mb-1">Characters</h4>
				<ul class="flex gap-3 flex-col">
					{#each info.characters.slice(0, 6) as character}
						<li>
							<div class="flex gap-3 mt-1">
								<!-- Small -->
								<img
									src={character.image}
									alt="User Avatar"
									class="inline-block w-12 h-12 rounded-full"
								/>

								<div class="flex flex-col">
									<span class="text-ascend text-sm font-gothamBook"
										>{character.name.userPreferred}</span
									>
									<span class="text-slate-400 text-sm font-gothamBook"
										>{character?.voiceActors?.at(0)?.name?.userPreferred ?? 'uknown'}</span
									>
								</div>
							</div>
						</li>
					{/each}
				</ul>
			</div>
		</div>
		<div>
			<h2 class="text-2xl px-2 py-10 text-white">Related</h2>
			<nav class="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8 ">
				<!-- Movie -->
				<!-- lol -->
				{#each info.relations.filter((related) => related.type === 'TV') as card}
					<a
						data-sveltekit-preload-code="hover"
						href="/info/{card.id}"
						class="group relative  aspect-w-16 overflow-hidden aspect-h-10 bg-black/25 rounded-2xl transition hover:ring-4 hover:ring-orange-500/50 active:opacity-75 active:ring-orange-500/25"
					>
						<img
							class="object-cover rounded-2xl h-full opacity-100 transform transition duration-300 ease-out group-hover:scale-105 group-focus:scale-105 group-focus-within:scale-105"
							src={card.image}
							alt="trending anime"
							loading="lazy"
						/>

						<div
							class="absolute rounded-[15px] inset-0 flex flex-col justify-between bg-gradient-to-b from-transparent  via-black/60 to-black"
						>
							<div class="p-4 flex items-end justify-start space-x-2" />
							<div class="px-4 py-5 flex items-end justify-between space-x-2">
								<div class="space-y-1">
									<h3 class="text-sm  xl:text-[15px] font-gotham   text-white w-[99%]">
										{card.title.english}
									</h3>
									<section class="text-sm font-gothamMedium w-max text-themeText">
										{card.relationType}

										<div
											class="font-semibold inline-flex px-2 py-[1px] leading-4 text-xs rounded text-ascend ml-2 bg-secondary"
										>
											{card.type}
										</div>
										<div
											class="font-semibold inline-flex px-2 py-[1px] leading-4 text-xs rounded text-ascend ml-2 bg-secondary"
										>
											{card.status}
										</div>
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
		</div>
	</div>
	<div class="min-h-full w-[27%]  pl-8 pr-3 py-12">
		<h4 class="text-xl text-slate-100 font-gothamMedium">More Like This</h4>
		{#each info.recommendations.slice(0, 5) as item}
			<div id="recent-container" class="mt-4 relative">
				<div id="box" class="w-full flex  items-center h-40 bg-secondary p-2 rounded-2xl">
					<div class="info  flex">
						<a href="/info/{item.id}" data-sveltekit-preload-data>
							<img src={item.image} alt="" class="h-36 w-40 object-cover  rounded-3xl" />
						</a>
						<div class="flex flex-col pl-3 justify-between it font-gotham w-full text-xs py-6 ">
							<div class="flex justify-between min-w-full ">
								<a href="/info/{item.id}" data-sveltekit-preload-data>
									<h1 class="font-gothamMedium line-clamp-1  text-white text-sm">
										{item.title.english ?? item.title.romaji}
									</h1>
								</a>
								<div
									class="flex absolute right-2 top-2 items-center p-1  rounded-xl text-sm   h-5 bg-themeTextSecondary text-white"
								>
									{item.rating / 10}<svg
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
							<h4 class="text-sm w-full line-clamp-2 text-slate-600">{item.type}</h4>
							<div class="flex justify-between  w-full">
								<span class="text-ascendSecondary">{item.episodes} Episodes</span>
								<button class="p-2 absolute right-2 bottom-4  rounded-full" id="playBtn"
									><div
										class=" hidden xl:flex  right-3 items-center justify-center w-7 h-7 rounded-full transition  bg-white group-hover:bg-[#312e30] group-hover:text-white group-hover:scale-110 group-active:scale-100"
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
											fill=""
											class="hi-mini hi-play fill-ascend w-3 h-3 translate-x-0.2"
										>
											<path
												d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"
											/>
										</svg>
									</div></button
								>
							</div>
						</div>
					</div>
				</div>
			</div>
		{/each}
	</div>
</section>

<style>
	.videoWrapper {
		position: relative;
		padding-bottom: 56.25%; /* 16:9 */
		height: 0;
	}
	.videoWrapper iframe {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
	#playBtn {
		background-color: rgba(128, 128, 128, 0.5);
	}
</style>
