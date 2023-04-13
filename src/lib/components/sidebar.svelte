<script lang="ts">
	import { state } from '../../stores';
let Sidebar = false;
	
	
</script>

<nav
	id="page-sidebar"
	class="flex flex-col  fixed top-0 left-0 bottom-0 w-full lg:w-64  h-full bg-secondary text-themeText z-50 transform transition-transform duration-500 ease-in -translate-x-full lg:translate-x-0"
	aria-label="Main Sidebar Navigation"
	class:lg:w-24={!$state}
	class:lg:w-64={$state}
>
	<!-- Sidebar Header -->
	<div
		class="h-16 bg-secondary bg-opacity-25 flex-none flex items-center justify-between lg: px-4 w-full"
	>
		<!-- Brand -->
		<div class="flex w-full justify-between items-center  " class:flex-col={!$state} class:flex={$state} >
			<a
				href="javascript:void(0)"
				class:w-full={!$state}
				class="inline-flex items-center  space-x-2 font-bold text-lg  tracking-wide text-white hover:opacity-75"
			>
				<img
					src="/images/Anifox.svg"
					class="h-10 w-10 -rotate-12 mx-auto hover:rotate-0 duration-150"
					alt=""
					srcset=""
					class:mt-10={!$state}
				/>
				<span class="font-gothamBold text-lg" class:hidden={!$state}>Anifox </span>
			</a>
			<button class="p-2 flex justify-center items-center my-auto transition ease-out duration-500  " class:w-full={!$state} on:click={() => {
				$state = !$state;
				Sidebar = !Sidebar;
			}} class:rotate-180={Sidebar} class:mx-auto={!$state} >
				
				<svg
				class="hi-mini hi-chevron-left inline-block w-5 h-5"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 20 20"
				fill="currentColor"
				aria-hidden="true"
				><path
					fill-rule="evenodd"
					d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z"
					clip-rule="evenodd"
				/></svg
			>
			
			</button>
		</div>
		<!-- END Brand -->

		<!-- Close Sidebar on Mobile -->
		<div class="lg:hidden">
			<button
				type="button"
				class="inline-flex justify-center items-center space-x-2 border font-semibold focus:outline-none  py-2 leading-5 text-sm rounded border-transparent text-white opacity-75 hover:opacity-100 focus:ring focus:ring-gray-500 focus:ring-opacity-25 active:opacity-75"
			>
				<svg
					class="hi-solid hi-x inline-block w-4 h-4 -mx-1"
					fill="currentColor"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
					><path
						fill-rule="evenodd"
						d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
						clip-rule="evenodd"
					/></svg
				>
			</button>
		</div>
		<!-- END Close Sidebar on Mobile -->
	</div>
	<!-- END Sidebar Header -->

	<!-- Sidebar Navigation -->
	<div class="overflow-y-auto">
		<div class="p-4 w-full">
			<nav class="space-y-1">
				<a
					href="/"
					class="flex items-center space-x-3  font-medium rounded text-gray-400 bg-opacity-60"
					class:hidden={!$state}
				>
					<div class="relative">
						<svg
							class="hi-mini absolute inset-0  text-ascend blur opacity-50 hi-home inline-block w-5 h-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
							fill="currentColor"
							aria-hidden="true"
							><path
								fill-rule="evenodd"
								d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
								clip-rule="evenodd"
							/></svg
						>

						<span class="flex-none flex items-center ">
							<svg
								class="hi-mini hi-home inline-block w-5 h-5 text-ascend "
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 20 20"
								fill="currentColor"
								aria-hidden="true"
								><path
									fill-rule="evenodd"
									d="M9.293 2.293a1 1 0 011.414 0l7 7A1 1 0 0117 11h-1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-3a1 1 0 00-1-1H9a1 1 0 00-1 1v3a1 1 0 01-1 1H5a1 1 0 01-1-1v-6H3a1 1 0 01-.707-1.707l7-7z"
									clip-rule="evenodd"
								/></svg
							>
						</span>
					</div>

					<span class="py-2 grow  ">Home</span>
				</a>
				<div
					class=" pt-5 pb-2 text-xs font-medium uppercase tracking-wider text-themeText"
					class:hidden={!$state}
				>
					Menu
				</div>
				<a
					href="javascript:void(0)"
					class="flex items-center space-x-3  font-medium rounded text-themeText hover:text-gray-100 hover:bg-gray-700 hover:bg-opacity-60 active:bg-gray-700 active:bg-opacity-40"
					class:hidden={!$state}
				>
					<span class="flex-none flex items-center opacity-100">
						<svg
							class="hi-outline hi-star inline-block w-5 h-5 fill-transparent stroke-themeText hover:fill-ascend hover:stroke-ascend "
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							aria-hidden="true"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
							/></svg
						>
					</span>
					<span class="py-2 grow">Popular</span>
				</a>
				<a
					href="javascript:void(0)"
					class="flex items-center space-x-3  font-medium rounded text-themeText hover:text-gray-100 hover:bg-gray-700 hover:bg-opacity-60 active:bg-gray-700 active:bg-opacity-40"
					class:hidden={!$state}
				>
					<span class="flex-none flex items-center opacity-50">
						<svg
							class="bi bi-graph-up-arrow inline-block w-5 h-5"
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							viewBox="0 0 16 16"
							aria-hidden="true"
							><path
								fill-rule="evenodd"
								d="M0 0h1v15h15v1H0V0Zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5Z"
							/></svg
						>
					</span>
					<span class="py-2 grow">Trending</span>
				</a>
				<a
					href="javascript:void(0)"
					class="flex items-center space-x-3  font-medium rounded text-themeText hover:text-gray-100 hover:bg-gray-700 hover:bg-opacity-60 active:bg-gray-700 active:bg-opacity-40"
					class:hidden={!$state}
				>
					<span class="flex-none flex items-center opacity-50">
						<svg
							class="hi-outline hi-clock inline-block w-5 h-5"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke-width="1.5"
							stroke="currentColor"
							aria-hidden="true"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
							/></svg
						>
					</span>
					<span class="py-2 grow">Recent Episodes</span>
				</a>
				<a
					href="javascript:void(0)"
					class="flex items-center space-x-3  font-medium rounded text-themeText hover:text-gray-100 hover:bg-gray-700 hover:bg-opacity-60 active:bg-gray-700 active:bg-opacity-40"
					class:hidden={!$state}
				>
					<span class="flex-none flex items-center opacity-50">
						<svg
							class="hi-solid hi-magnifying-glass inline-block w-5 h-5"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							aria-hidden="true"
							><path
								fill-rule="evenodd"
								d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z"
								clip-rule="evenodd"
							/></svg
						>
					</span>
					<span class="py-2 grow">Anime News</span>
				</a>
				<div
					class=" pt-5 pb-2 text-xs font-medium uppercase tracking-wider text-gray-400"
					class:hidden={!$state}
				>
					Account
				</div>
				<a
					href="javascript:void(0)"
					class="flex items-center space-x-3  font-medium rounded text-themeText hover:text-gray-100 hover:bg-gray-700 hover:bg-opacity-60 active:bg-gray-700 active:bg-opacity-40"
					class:hidden={!$state}
				>
					<span class="flex-none flex items-center opacity-50">
						<svg
							class="hi-outline hi-user inline-block w-5 h-5"
							stroke="currentColor"
							fill="none"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
							/></svg
						>
					</span>
					<span class="py-2 grow">Profile</span>
				</a>
				<a
					href="javascript:void(0)"
					class="flex items-center space-x-3  font-medium rounded text-themeText hover:text-gray-100 hover:bg-gray-700 hover:bg-opacity-60 active:bg-gray-700 active:bg-opacity-40"
					class:hidden={!$state}
				>
					<span class="flex-none flex items-center opacity-50">
						<svg
							class="hi-outline hi-cog inline-block w-5 h-5"
							stroke="currentColor"
							fill="none"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
							/><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
							/></svg
						>
					</span>
					<span class="py-2 grow">Settings</span>
				</a>
				<a
					href="javascript:void(0)"
					class="flex items-center space-x-3  font-medium rounded text-themeText hover:text-gray-100 hover:bg-gray-700 hover:bg-opacity-60 active:bg-gray-700 active:bg-opacity-40"
					class:hidden={!$state}
				>
					<span class="flex-none flex items-center opacity-50">
						<svg
							class="hi-outline hi-lock-open inline-block w-5 h-5"
							stroke="currentColor"
							fill="none"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg"
							><path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
							/></svg
						>
					</span>
					<span class="py-2 grow">Log out</span>
				</a>
			</nav>
		</div>
	</div>
	<!-- END Sidebar Navigation -->
</nav>
<!-- Page Sidebar -->
