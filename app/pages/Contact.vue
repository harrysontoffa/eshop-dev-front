<template>
  <section class="mx-auto max-w-6xl px-4 py-12 md:px-8 md:py-16">
    <header class="mb-10 text-center">
      <h1 class="font-serif text-4xl text-primary md:text-5xl">Contactez-nous</h1>
      <p class="mx-auto mt-3 max-w-xl text-base-content/70">
        Une question sur une commande, un produit ou nos producteurs ?
        Écrivez-nous, nous vous répondons sous 48 h ouvrées.
      </p>
    </header>

    <div class="grid gap-10 lg:grid-cols-3">
      <aside class="space-y-6 rounded-box bg-primary p-8 text-primary-content lg:col-span-1">
        <h2 class="font-serif text-2xl text-secondary">Nos coordonnées</h2>

        <div class="flex items-start gap-3">
          <Icon name="feather:map-pin" class="mt-1 size-5 shrink-0 text-secondary" aria-hidden="true" />
          <p>Les Saveurs d'Occitanie<br />31000 Toulouse</p>
        </div>
        <div class="flex items-start gap-3">
          <Icon name="feather:mail" class="mt-1 size-5 shrink-0 text-secondary" aria-hidden="true" />
          <a href="mailto:contact@saveurs-occitanie.fr" class="link link-hover">contact@saveurs-occitanie.fr</a>
        </div>
        <div class="flex items-start gap-3">
          <Icon name="feather:clock" class="mt-1 size-5 shrink-0 text-secondary" aria-hidden="true" />
          <p>Du lundi au vendredi<br />9 h – 18 h</p>
        </div>
      </aside>

      <form @submit.prevent="envoyer()" class="space-y-5 rounded-box bg-base-100 p-6 shadow-sm md:p-8 lg:col-span-2">
        <p class="text-sm text-base-content/70">
          Les champs marqués d'un <span aria-hidden="true" class="text-error">*</span> sont obligatoires.
        </p>

        <div class="grid gap-5 sm:grid-cols-2">
          <div class="flex flex-col gap-1">
            <label for="nom" class="text-sm font-medium">Nom <span aria-hidden="true" class="text-error">*</span></label>
            <input  v-model="nom" id="nom" name="nom" type="text" class="input w-full" required maxlength="50" autocomplete="family-name" />
            <p class="text-red-500 font-semibold text-xs " v-if="afficherErreurNom" >
                Le nom doit être compris entre 3 et 50 caractères
             </p>   
        </div>

          <div class="flex flex-col gap-1">
            <label for="prenom" class="text-sm font-medium">Prénom <span aria-hidden="true" class="text-error">*</span></label>
            <input v-model="prenom" id="prenom" name="prenom" type="text" class="input w-full" required maxlength="50" autocomplete="given-name" />
             <p class="text-red-500 font-semibold text-xs " v-if="afficherErreurPrenom" >
                Prenom doit être compris entre 3 et 50 caractères
             </p>  
        </div>
        </div>

        <div class="flex flex-col gap-1">
          <label for="email" class="text-sm font-medium">Adresse e-mail <span aria-hidden="true" class="text-error">*</span></label>
          <input v-model="email" id="email" name="email" type="email" class="input w-full" required autocomplete="email" placeholder="vous@exemple.fr" />
          <p class="text-red-500 font-semibold text-xs " v-if="afficherErrreruEmail" >email est invalide  </p>
        </div>

        <div class="flex flex-col gap-1">
          <label for="sujet" class="text-sm font-medium">Sujet <span aria-hidden="true" class="text-error">*</span></label>
          <select v-model="sujet" id="sujet" name="sujet" class="select w-full" required>
            <option value="" disabled>Choisissez un sujet</option>
            <option>Question sur une commande</option>
            <option>Question sur un produit</option>
            <option>Devenir producteur partenaire</option>
            <option>Autre demande</option>
          </select>
        </div>

        <div class="flex flex-col gap-1">
          <label for="contenu" class="text-sm font-medium">Votre message <span aria-hidden="true" class="text-error">*</span></label>
          <textarea v-model="message" id="contenu" name="contenu" class="textarea min-h-40 w-full" required maxlength="5000"></textarea>
          <p class="text-red-500 font-semibold text-xs " v-if="(message.length>=5000)" >Votre message est trop long</p>
          <!-- <p v-if="!champsRemplis" >veuillez remplir tous les champs</p> -->
        </div>

        <p class="text-xs text-base-content/60">
          Vos données sont utilisées uniquement pour répondre à votre demande et ne sont jamais transmises à des tiers.
          En savoir plus dans notre
          <NuxtLink to="/politique-de-confidentialite" class="link">politique de confidentialité</NuxtLink>.
        </p>

        <button :disabled="isDisabled" :class="{[btnColor.disabled] :isDisabled}"   type="submit" class="btn btn-primary w-full sm:w-auto">
          <Icon name="feather:send" class="size-4" aria-hidden="true" />
          Envoyer le message
        </button>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import  { ref, computed } from 'vue';
const  btnColor= {
    'disabled': 'bg-gray-500'
}

const email = ref('')
const nom = ref('')
const prenom = ref('')
const sujet = ref('')
const message = ref('')
const isSubmit = ref(true)
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const nomPrenomRegex = /^(?:(?=.{3,50}$)[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '’-][A-Za-zÀ-ÖØ-öø-ÿ]+)*)?$/
let isDisabled = ref(false)

const isNomValide= computed (()=>{
    return nomPrenomRegex.test(nom.value.trim())
})

const isPrenomValide=computed (()=>{
    return nomPrenomRegex.test(prenom.value.trim())
})

const isEmailvalide = computed(()=>{
    return emailRegex.test(email.value.trim())
})

const champsRemplis = computed(()=>{
    if (nom.value.trim() && prenom.value.trim() && email.value.trim() && sujet.value.trim() && message.value.trim()){
        return true
    } 
})
const isFormulaireValide = computed (()=>{
    if(champsRemplis.value &&
    isNomValide.value &&
     isNomValide.value &&
      isPrenomValide.value && 
      isEmailvalide.value){
        return true
      }


})

const MAX_MESSAGE = 5000
const messageRestant = computed(() => MAX_MESSAGE - message.value.length)
const messageProcheLimite = computed(() => messageRestant.value <= 500)

const emailPourErreur = ref('')

watch(email, (nouvelleValeur, ancienneValeur, onCleanup)=>{
    const minuteur = setTimeout(()=>{
        emailPourErreur.value = nouvelleValeur
    }, 2000)
    onCleanup(()=>clearTimeout(minuteur))
})
const nomErreur = ref('')

watch(nom, (nouvelleValeur, ancienneValeur, onCleanup)=>{
    const minuteur = setTimeout(()=>{
        nomErreur.value= nouvelleValeur
    }, 1000)
    onCleanup(()=>clearTimeout(minuteur))
})
const afficherErreurNom = computed (()=>{
    const valeur = nomErreur.value.trim()
    return valeur.length>0 && !nomPrenomRegex.test(valeur)
})

const afficherErrreruEmail= computed (()=>{
    const valeur = emailPourErreur.value.trim()
    return valeur.length >0 && !emailRegex.test(valeur)
})


const prenomErreur = ref('')

watch(prenom, (nouvelleValeur, ancienneValeur, onCleanup)=>{
    const minuteur = setTimeout(()=>{
        prenomErreur.value= nouvelleValeur
    }, 1000)
    onCleanup(()=>clearTimeout(minuteur))
})
const afficherErreurPrenom = computed (()=>{
    const valeur = prenomErreur.value.trim()
    return valeur.length>0 && !nomPrenomRegex.test(valeur)
})

const api =useApi()
const etat = ref<'repos' | 'envoi' | 'succes' | 'erreur'>('repos')

async function envoyer(){
    if(!isFormulaireValide.value){return}
     isDisabled.value= true
    try {
        
        await api('/message',{
            method: 'POST',
            body: {
                nom: nom.value.trim(),
                prenom: prenom.value.trim(),
                email: email.value.trim(),
                sujet: sujet.value.trim(),
                contenu: message.value.trim()
            }
        })
        email.value=''
        nom.value=''
        prenom.value=''
        sujet.value=''
        message.value=''

       

        

        
    } catch (error) {
        etat.value= 'erreur'
    } finally{
         isDisabled.value= false
    }
        
        
         setTimeout(()=>(isSubmit.value=false), 5000)
    
}
</script>