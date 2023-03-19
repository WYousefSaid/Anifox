<script lang="ts">
	import '../app.css';
</script>  
<!-- Page Container -->

<div id="page-container" class="flex flex-col mx-auto w-full min-h-screen bg-gray-100 lg:pl-64">

<header id="page-header" class="flex flex-none items-center h-16 bg-primary shadow-sm  border-2 border-dotted lg:pl-64">
	<div class="flex justify-between max-w-10xl mx-auto px-4 lg:px-8 w-full">
		<!-- Left Section -->
		<div class="flex items-center space-x-2">
			<!-- Toggle Sidebar on Desktop -->  
			<div class="hidden lg:block">
			
			</div>
			<!-- END Toggle Sidebar on Desktop -->

			<!-- Toggle Sidebar on Mobile -->
			<div class="lg:hidden">
				
			</div>
			<!-- END Toggle Sidebar on Mobile -->

		 
			
			
		</div>
		<!-- END Left Section -->

		
	</div>
</header>
<!-- END Page Header -->
  
		<slot />
</div>
