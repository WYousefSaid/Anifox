<script lang="ts">
  import Sidebar from '$lib/components/sidebar.svelte';
  import { Splide, SplideSlide,SplideTrack } from '@splidejs/svelte-splide';
	// import type { Data } from'$lib/types';
	// export let data: Data;
  import '@splidejs/svelte-splide/css';
  import type { Data } from '$lib/types';
	export let data;
  console.log(data);
  
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
  <Sidebar></Sidebar>

  <!-- Page Header -->
 
  <!-- Page Content -->
  <main id="page-content" class="flex flex-auto flex-col-reverse lg:flex-row-reverse max-w-full  bg-primary">
  
    <div class="flex-none lg:flex flex-col w-full lg:w-80 xl:w-96 p-4 lg:p-8 bg-primary">
      <!-- Placeholder -->
      <div class="flex-auto flex items-center justify-center rounded-xl bg-primary border-2 border-dashed border-gray-200 text-gray-400 ">Side Content</div>
    </div>
    <!-- END Side Content -->

    <!-- Main Content -->
    <div class="flex-grow flex flex-col max-w-10xl rounded-xl  p-4 lg:p-8 w-full">
      <!--

      ADD YOUR MAIN CONTENT BELOW

      -->

      
      <!-- Placeholder -->
      <div class=" flex flex-auto min-w-full  rounded-xl bg-primary   border-2 border-dashed border-gray-200 text-gray-400 "> <div class="container relative h-min rounded-3xl  lg:block">
        <Splide hasTrack={ true }  aria-label="...">

          {#each data.trending as slide}
            <SplideSlide>
              <div class="relative rounded-3xl">
              <img src="{slide.cover}" alt="" class="h-96 rounded-3xl object-cover w-full" srcset="">
              <div class="absolute text-2xl text-red-400 inset-0">hello</div>
            </div>
            </SplideSlide>
          {/each}
          
        </Splide>
      </div></div>

      
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