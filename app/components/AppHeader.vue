<template>
    <div class="navbar   shadow-sm bg-primary items-center justify-between px-7 ">
  
        
    <div class="logo">
        <NuxtLink to="/acceuil" class="flex gap-1 items-center ">
            <img src="/logo.svg" alt="logo" class="h-10 w-auto lg:h-12" >
            <div class="flex flex-col " >
                <h2 class=" font-bold text-xl leading-none text-secondary " >LES SAVEURS</h2> 
                <h2 class=" font-light text-sm  leading-none text-secondary " >D'OCCITANIE</h2>
            </div>
        </NuxtLink>
    </div>
   
  <div class="flex w-max gap-12 ">
    <ul class="flex items-center gap-12 w-max">
      <li class="text-primary-content  ">Acceuil</li>
      <li class="text-primary-content  ">Catalogue</li>
      <li class="text-primary-content  ">A propos </li>
      <li class="text-primary-content ">Contact</li>
    </ul>
    <div> 
        
    <label class="input input-xs w-72 rounded-full bg-white text-neutral-800">
    <Icon name="feather:search" class="size-4 opacity-50" aria-hidden="true" />
    <input
      type="search"
      name="q"
      class="grow"
      placeholder="Rechercher un produit…"
      aria-label="Rechercher un produit ou une catégorie"
    />
  </label>
    </div>
  

  
    <div class="flex items-center gap-4">
        <div class="flex items-center gap-3">
            <span class="border-2 border-amber-50 p-1 rounded-full "> 
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
                    <g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></g>
                </svg>
            </span>
            <h2 class="text-white   ">Mon Compte</h2>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
            <g fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2">
                <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" /></g>
        </svg>
    </div> 
  </div>
</div>
</template>


<script setup lang="ts">

 



</script>