<script lang="ts">
	import 'vidstack/styles/base.css';

	import { defineCustomElements } from 'vidstack/elements';
	import { onMount } from 'svelte';
	let settings = false;
	function toggleSettings() {
		settings = !settings;
	}
	onMount(async () => {
		await defineCustomElements();
		const player: any = document.querySelector('media-player');
		player.onAttach(() => {
			const track = player.textTracks.getById('eng');
			console.log(track);
			track.mode = 'showing';
		});
	});
</script>

<!-- remove `controls` attribute if you're designing a custom UI -->
<media-player
	aspect-ratio="16:9"
	src="https://proxy.vnxservers.com/proxy/m3u8/https%3A%2F%2Fc-an-ca1.betterstream.cc%3A2223%2Fhls-playback%2F71f87b4028d27b3ba749bd2029f3248245618a740ca81a9a9863f257784436f85c939482f4d306945639b935dc612f23695aaa0310efe181533976bb454971570f52a27aefedb3f5b39dc42ff76ff223a5571dbd647137b83ab8603fe7be80f441ff29270fd28f0e4861792e54841b03f9bffdfb0a3e746916108fed27654dacc9da2d261ed4f0bdb40a4c4c0f749858%2Fmaster.m3u8"
	class="relative -_-"
>
	<media-outlet
		><track
			src="https://cc.zorores.com/92/31/923163216f44b24151732b8b984b1235/eng-2.vtt"
			kind="subtitles"
			label="English"
			srclang="en-US"
			default
			data-type="vtt"
			id="eng"
		/></media-outlet
	>

	<div class="media-ui absolute bottom-5 w-full">
		<!-- Time SLider Start -->
		<media-time-slider
			class="group mx-[calc(var(--thumb-size)/2)] flex h-12 items-center"
			style="--thumb-size: 0.875rem; --track-height: 0.25rem"
		>
			<!-- track -->
			<div
				class="absolute top-1/2 left-0 z-0 h-[var(--track-height)] w-full -translate-y-1/2 transform bg-[#5a595a] outline-none group-data-[focus]:ring-4 group-data-[focus]:ring-blue-400"
			/>
			<!-- track fill -->
			<div
				class="live:bg-red-500 absolute top-1/2 left-0 z-20 h-[var(--track-height)] w-full -translate-y-1/2 scale-x-[var(--slider-fill-rate)] transform bg-ascend will-change-transform"
				style="transform-origin: left center"
			/>
			<!-- track progress -->
			<div
				class="absolute top-1/2 left-0 z-10 h-[var(--track-height)] w-full -translate-y-1/2 scale-x-[calc(var(--media-buffered)/var(--media-duration))] transform bg-[#878787] will-change-transform"
				style="transform-origin: left center"
			/>
			<!-- thumb container -->
			<div
				class="absolute top-0 left-[var(--slider-fill-percent)] z-20 h-full w-[var(--thumb-size)] -translate-x-1/2 transform group-data-[dragging]:left-[var(--slider-pointer-percent)]"
			>
				<!-- thumb -->
				<div
					class="absolute top-1/2 left-0 h-[var(--thumb-size)] w-[var(--thumb-size)] -translate-y-1/2 transform rounded-full bg-ascend opacity-0 transition-opacity duration-150 ease-in group-data-[interactive]:opacity-100"
				/>
			</div>
			<!-- preview -->
			<div
				class="absolute top-[var(--preview-top)] left-[var(--preview-left)] flex -translate-x-1/2 transform items-center justify-center rounded-sm bg-black px-2.5 py-1 text-white/80 opacity-0 transition-opacity duration-200 ease-out group-data-[interactive]:opacity-100 group-data-[interactive]:ease-in"
				slot="preview"
			>
				<media-slider-thumbnail
					src="https://prev.zorores.com/_a_preview/76/76c7d19582984c21fb4c9962b812820a/thumbnails/sprite.vtt"
					slot="preview"
				/>
				<media-slider-value type="pointer" format="time" />
			</div>
		</media-time-slider>
		<!-- Time slider END -->
		<div class="complete-button-ui flex justify-between">
			<div class="left-section flex">
				<!-- Play Button Start -->
				<media-play-button
					class="flex h-12 w-12 items-center justify-center rounded-sm text-white hover:text-ascend outline-none data-[focus]:ring-4 data-[focus]:ring-blue-400"
					aria-label="Play"
				>
					<media-icon class="paused:block hidden" type="play" />
					<media-icon class="not-paused:block hidden" type="pause" />
				</media-play-button>
				<!-- Play Button END -->
				<!-- Seek 15 seconds back START -->
				<media-seek-button
					class="group flex h-12 w-12 items-center justify-center rounded-sm hover:text-ascend text-white outline-none data-[focus]:ring-4 data-[focus]:ring-blue-400"
					seconds="-15"
					aria-describedby="media-seek-backward-tooltip"
				>
					<!-- icon -->
					<media-icon type="seek-backward" />
					<!-- tooltip -->
					<div
						id="media-seek-backward-tooltip"
						class="ease pointer-events-none absolute bottom-full left-1/2 mb-4 -translate-x-1/2 translate-y-2.5 scale-75 transform whitespace-nowrap rounded-sm bg-black py-1 px-2 font-sans text-xs text-white opacity-0 transition-all duration-200 group-data-[hocus]:-translate-x-1/2 group-data-[hocus]:scale-100 group-data-[hocus]:opacity-100"
						role="tooltip"
						style="transform-origin: 50% 100%"
					>
						Seek -15s
					</div>
				</media-seek-button>
				<!-- Seek 15 seconds back END -->
				<div class="volume-ui flex flex-reverse w-52 items-center">
					<!-- Volule SLider start -->
					<media-mute-button
						class="group flex h-12 w-12 items-center justify-center rounded-sm hover:text-ascend text-white outline-none data-[focus]:ring-4 data-[focus]:ring-blue-400"
						aria-label="Mute"
					>
						<media-icon class="hidden group-data-[volume=muted]:block" type="mute" />
						<media-icon class="hidden group-data-[volume=low]:block" type="volume-low" />
						<media-icon class="hidden group-data-[volume=high]:block" type="volume-high" />
					</media-mute-button>
					<media-volume-slider
						class="group mx-[calc(var(--thumb-size)/2)] flex h-12 items-center"
						style="--thumb-size: 0.875rem; --track-height: 0.25rem"
					>
						<!-- track -->
						<div
							class="absolute top-1/2 left-0 z-0 h-[var(--track-height)] w-full -translate-y-1/2 transform bg-[#5a595a] outline-none group-data-[focus]:ring-4 group-data-[focus]:ring-blue-400"
						/>
						<!-- track fill -->
						<div
							class="absolute top-1/2 left-0 z-20 h-[var(--track-height)] w-full -translate-y-1/2 scale-x-[var(--slider-fill-rate)] transform bg-ascend will-change-transform"
							style="transform-origin: left center"
						/>
						<!-- thumb container -->
						<div
							class="absolute top-0 left-[var(--slider-fill-percent)] z-20 h-full w-[var(--thumb-size)] -translate-x-1/2 transform group-data-[dragging]:left-[var(--slider-pointer-percent)]"
						>
							<!-- thumb -->
							<div
								class="absolute top-1/2 left-0 h-[var(--thumb-size)] w-[var(--thumb-size)] -translate-y-1/2 transform rounded-full bg-white opacity-0 transition-opacity duration-150 ease-in group-data-[interactive]:opacity-100"
							/>
						</div>
						<!-- preview -->
						<div
							class="absolute top-[var(--preview-top)] left-[var(--preview-left)] flex -translate-x-1/2 transform items-center justify-center rounded-sm bg-black px-2.5 py-1 text-white/80 opacity-0 transition-opacity duration-200 ease-out group-data-[interactive]:opacity-100 group-data-[interactive]:ease-in"
							slot="preview"
						>
							<media-slider-value type="pointer" format="percent" />
						</div>
					</media-volume-slider>

					<!-- VOlume slider END -->
					<!-- TIME INFO START -->
					<div class="time-info ml-3 text-slate-200 flex">
						<media-time type="current" />
						<span>/</span>
						<media-time type="duration" />
					</div>
					<!-- TIME INFO END -->
				</div>
			</div>
			<div class="right-section flex items-center">
				<media-caption-button
					class="group flex h-12 w-12 items-center justify-center rounded-sm text-white hover:text-ascend outline-none data-[focus]:ring-4 data-[focus]:ring-blue-400"
					aria-describedby="media-caption-tooltip"
				>
					<!-- icons -->
					<media-icon class="not-captions:block text-ascend hidden" type="closed-captions" />
					<media-icon class="captions:block hidden" type="closed-captions-on" />
					<!-- tooltip -->
					<div
						id="media-caption-tooltip"
						class="ease pointer-events-none absolute bottom-full left-1/2 mb-4 -translate-x-1/2 translate-y-2.5 scale-75 transform whitespace-nowrap rounded-sm bg-black py-1 px-2 font-sans text-xs text-white opacity-0 transition-all duration-200 group-data-[hocus]:-translate-x-1/2 group-data-[hocus]:scale-100 group-data-[hocus]:opacity-100"
						role="tooltip"
						style="transform-origin: 50% 100%"
					>
						<span class="not-captions:inline hidden">Closed-Captions On</span>
						<span class="captions:inline hidden">Closed-Captions Off</span>
					</div>
				</media-caption-button>
				<div class="relative flex">
					<div
						class:hidden={!settings}
						class="quality-controls-container absolute bottom-10 -right-12 opacity-80 py-5 gap-1 flex flex-col justify-center items-center rounded-xl px-10 bg-secondary text-ascend"
						role="group"
						aria-label="Quality options"
					>
						<button class="media-controls-group focus:border-b-2 border-ascend">1080p</button>
						<button class="media-controls-group focus:border-b-2 border-ascend">720p</button>
						<button class="media-controls-group focus:border-b-2 border-ascend">360p</button>
						<button class="media-controls-group focus:border-b-2 border-ascend">auto</button>
					</div>
					<button on:click={toggleSettings} class="h-8 w-8">
						<media-icon type="settings" class="w-7 h-7 text-white hover:text-ascend" /></button
					>
				</div>
				<media-pip-button
					class="group flex h-12 w-12 items-center justify-center rounded-sm hover:text-ascend text-white outline-none data-[focus]:ring-4 data-[focus]:ring-blue-400"
					aria-describedby="media-pip-tooltip"
				>
					<!-- icons -->
					<media-icon class="not-pip:block hidden" type="picture-in-picture" />
					<media-icon class="pip:block hidden" type="picture-in-picture-exit" />
					<!-- tooltip -->
					<div
						id="media-pip-tooltip"
						class="ease pointer-events-none absolute bottom-full left-1/2 mb-4 -translate-x-1/2 translate-y-2.5 scale-75 transform whitespace-nowrap rounded-sm bg-black py-1 px-2 font-sans text-xs text-white opacity-0 transition-all duration-200 group-data-[hocus]:-translate-x-1/2 group-data-[hocus]:scale-100 group-data-[hocus]:opacity-100"
						role="tooltip"
						style="transform-origin: 50% 100%"
					>
						<span class="not-pip:inline hidden">Enter PIP</span>
						<span class="pip:inline hidden">Exit PIP</span>
					</div>
				</media-pip-button>

				<media-fullscreen-button
					class="group flex h-12 w-12 items-center justify-center rounded-sm hover:text-ascend text-white outline-none data-[focus]:ring-4 data-[focus]:ring-blue-400"
					aria-describedby="media-fullscreen-tooltip"
				>
					<!-- icons -->
					<media-icon class="not-fullscreen:block hidden" type="fullscreen-arrow" />
					<media-icon class="fullscreen:block hidden" type="fullscreen-arrow-exit" />
					<!-- tooltip -->
					<div
						id="media-fullscreen-tooltip"
						class="ease pointer-events-none absolute bottom-full left-1/2 mb-4 -translate-x-1/2 translate-y-2.5 scale-75 transform whitespace-nowrap rounded-sm bg-black py-1 px-2 font-sans text-xs text-white opacity-0 transition-all duration-200 group-data-[hocus]:-translate-x-1/2 group-data-[hocus]:scale-100 group-data-[hocus]:opacity-100"
						role="tooltip"
						style="transform-origin: 50% 100%"
					>
						<span class="not-fullscreen:inline hidden">Enter Fullscreen</span>
						<span class="fullscreen:inline hidden">Exit Fullscreen</span>
					</div>
				</media-fullscreen-button>
			</div>
		</div>
	</div>
</media-player>
