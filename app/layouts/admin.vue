<script setup lang="ts">
import AppSideBarAdmin from '~/components/AppSideBarAdmin.vue';

</script>

<template>
    <div class="flex">

        
    <app-side-bar-admin></app-side-bar-admin>


    <main class="w-full">
        <div class=" border border-gray-300 justify-between flex p-3 items-center">
            <h2 class="font-semibold text- text-xl ">Back-office</h2>
            <div class="flex gap-4">
                <button class="border border-gray-500 px-4 py-1 rounded-sm font-medium text-xs flex items-center gap-1">Voir le site 
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                        <path fill="none" stroke="#888888" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3" /></svg>
                </button>
                <button class="border border-gray-500 px-4 py-1 rounded-sm text-xs flex gap-1 items-center">
                    <span class="border border-black p-1 rounded-full "> 
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <g fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></g>
                </svg>
            </span>
                    Admin</button>
            </div>
            
        </div>
        <slot></slot>
    </main>
    

  </div>
</template>