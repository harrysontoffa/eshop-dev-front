<template>
    <footer class="footer sm:footer-horizontal bg-primary text-neutral-content px-7 justify-between py-5">
      <div>
          <div class="logo">
              <NuxtLink to="/acceuil">
                  <AppLogo></AppLogo>
              </NuxtLink>
          </div>
          <p  class="text-white font-light " >Recettes, nouveautées et produits de saison, <br>une fois par mois </p>
      </div>
      <span class="w-0.5 h-30 bg-gray-200"></span>
      <div class="flex gap-8"> 
  <nav class="flex flex-col ">
    <h6 class="footer-title">Services</h6>
    <a class="link link-hover">Livraison et retours</a>
    <a class="link link-hover">Contactez nous</a>
    <a class="link link-hover">FAQ</a>
    <a class="link link-hover">Suivi de commande</a>
    <a class="link link-hover">Médiateur</a>
  </nav>
  <nav class="flex flex-col">
    <h6 class="footer-title">Company</h6>
    <a class="link link-hover">Catalogue</a>
    <a class="link link-hover">Nos Producteurs</a>
    <a class="link link-hover">Idées de cadeaux</a>
    <a class="link link-hover">Promotions</a>
  </nav>
  <nav class="flex flex-col">
    <h6 class="footer-title">Legal</h6>
    <a class="link link-hover">Mentions légales</a>
    <a class="link link-hover">Politique de confidentialité</a>
    <a class="link link-hover">Politique des cookies</a>
  </nav>
  </div>
   <span class="w-0.5 h-30 bg-gray-200"></span>
  <div class="flex flex-col">  
     <div>
      <input type="text" placeholder="Votre@email.fr" class="h-13 bg-white text-black px-4 w-60 rounded-l-sm ">
      <button class="h-13 bg-amber-500 text-green-950 font-semibold text-base w-20 border rounded-r-sm ">Sinscrire</button>
     </div>


    <div class="flex items-center gap-1">
      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
        <path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22s8-4 8-10V5l-8-3l-8 3v7c0 6 8 10 8 10" /></svg>
      <p>Vos données sont protégées <br> et ne sont, jamais partagées. </p>
    </div>
  </div>
</footer>
<div class="flex w-full items-center justify-center bg-green-900 py-1 text-white"><p>Les Saveurs d'occitanie-Tous droits réservés</p></div>
</template>

<script setup lang="ts">
</script>
