<script lang="ts">
	import '../app.css';
	import { state } from '../stores';
	$: $state = $state;
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
		class="flex flex-none items-center h-16 bg-primary shadow-sm  border-2 border-dotted pl-10 font-gothamBook"
	>
		<div class="nav flex gap-2 min-w-max">
			<a href="#" class="text-themeText transition group focus:text-ascend hover:text-ascend transition duration-300 ">
				<span>Home</span>
				<span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-ascend"></span>
			</a>
			<a href="#" class="text-themeText transition group focus:text-ascend hover:text-ascend transition duration-300 ">
				<span>Movies</span>
				<span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-ascend"></span>
			</a>
			<a href="#" class="text-themeText transition group focus:text-ascend hover:text-ascend transition duration-300 ">
				<span>New Releases</span>
				<span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-ascend"></span>
			</a>
			<a href="#" class="text-themeText transition group focus:text-ascend hover:text-ascend transition duration-300 ">
				<span>Community</span>
				<span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-ascend"></span>
			</a>
		</div>
		<div class="flex justify-between max-w-10xl px-4 lg:px-8 w-full">
			<!-- Left Section -->
			<div class="flex items-center space-x-2">
				<!-- Toggle Sidebar on Desktop -->
				<div class="hidden lg:block" />
				<!-- END Toggle Sidebar on Desktop -->

				<!-- Toggle Sidebar on Mobile -->
				<div class="lg:hidden" />
				<!-- END Toggle Sidebar on Mobile -->
			</div>
			<!-- END Left Section -->
		</div>
	</header>
	<!-- END Page Header -->

	<slot />
</div>
