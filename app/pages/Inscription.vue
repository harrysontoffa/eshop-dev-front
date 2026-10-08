<template>
  <section class="flex min-h-[80vh] items-center justify-center px-4 py-12">
    <div class="w-full max-w-2xl rounded-box bg-base-100 p-6 shadow-sm md:p-10">
      <header class="mb-8 text-center">
        <h1 class="font-serif text-4xl text-primary">Créer un compte</h1>
        <p class="mt-2 text-base-content/70">
          Suivez vos commandes et retrouvez vos produits préférés.
        </p>
      </header>
       
       
      <form @submit.prevent="soumettre()" class="space-y-5">
        <p class="text-sm text-base-content/70">
          Les champs marqués d'un <span aria-hidden="true" class="text-error">*</span> sont obligatoires.
        </p>

        <div class="grid gap-5 sm:grid-cols-2">
          <div class="flex flex-col gap-1">
            <label for="nom" class="text-sm font-medium">Nom <span aria-hidden="true" class="text-error">*</span></label>
            <input v-model="nom" id="nom" name="nom" type="text" class="input w-full" required minlength="3" maxlength="20" autocomplete="family-name" />
            <p class="text-red-500 font-semibold text-xs "  v-if="afficherErreurNom">Le nom doit être compris entre 3 et 20 caractères</p>  
        </div>

          <div class="flex flex-col gap-1">
            <label for="prenom" class="text-sm font-medium">Prénom <span aria-hidden="true" class="text-error">*</span></label>
            <input v-model="prenom" id="prenom" name="prenom" type="text" class="input w-full" required minlength="3" maxlength="20" autocomplete="given-name" />
             <p class="text-red-500 font-semibold text-xs "  v-if="afficherErreurPrenom">Le prénom doit être compris entre 3 et 20 caractères</p>  
        </div>
        </div>

        <div class="flex flex-col gap-1">
          <label for="email" class="text-sm font-medium">Adresse e-mail <span aria-hidden="true" class="text-error">*</span></label>
          <input v-model="email"  id="email" name="email" type="email" class="input w-full" required autocomplete="email" placeholder="vous@exemple.fr" />
          <p class="text-red-500 font-semibold text-xs " v-if="afficherErreurEmail">email invalide</p>
        </div>

        <div class="flex flex-col gap-1">
          <label for="telephone" class="text-sm font-medium">Téléphone <span aria-hidden="true" class="text-error">*</span></label>
          <input v-model="telephone" id="telephone" name="telephone" type="tel" class="input w-full" required autocomplete="tel" placeholder="06 12 34 56 78" aria-describedby="telephone-aide" />
          <p id="telephone-aide" class="text-xs text-base-content/60">Format : 0612345678 ou +33612345678</p>
          <p class="text-red-500 font-semibold text-xs " v-if="afficherErreurTelephone">Format telephone invalide</p>
        </div>

        <div class="grid gap-5 sm:grid-cols-2">
          <div class="flex flex-col gap-1">
            <label for="motDePasse" class="text-sm font-medium">Mot de passe <span aria-hidden="true" class="text-error">*</span></label>
            <input v-model="Password" id="motDePasse" name="motDePasse" type="password" class="input w-full" required minlength="12" maxlength="72" autocomplete="new-password" aria-describedby="motDePasse-aide" />
          </div>

          <div class="flex flex-col gap-1">
            <label  for="confirmation" class="text-sm font-medium">Confirmer le mot de passe <span aria-hidden="true" class="text-error">*</span></label>
            <input v-model="verifyPassword" id="confirmation" name="confirmation" type="password" class="input w-full" required minlength="12" maxlength="72" autocomplete="new-password" />
            <p class="text-red-500 font-semibold text-xs " v-if="AfficherVerifyError" >les deux mots de passe doivent être identiques</p>
        </div>
        </div>
         
                <ul id="motDePasse-aide">
                    <li :class="{[conditionColor.invvalid]:ErreurPasswordMincaractere}" >entre 12 et 72 caractères</li>
                    <li :class="{[conditionColor.invvalid]:ErreurPasswordMinuscule}"  >au moins une minuscule</li>
                    <li :class="{[conditionColor.invvalid]:ErreurPasswordMajuscule}">au moins une majuscule</li>
                    <li :class="{[conditionColor.invvalid]:ErreurPasswordUnChiffre}">au moins un chiffre</li>
                    <li :class="{[conditionColor.invvalid]:ErreurPasswordCaractèreSpe}">au moins un caractère spécial</li>
                    <li :class="{[conditionColor.invvalid]:ErreurPasswordNoSameCarac}">jamais 3 caractères identiques à la suite</li>
                    <li :class="{[conditionColor.invvalid]:ErreurPasswordNoSpace}">aucun espace</li>
                </ul>
              
        <div class="space-y-3 pt-2">
          <label class="flex cursor-pointer items-start gap-3"> 
            <input v-model="conditionsGeneral" type="checkbox"    name="cgu" class="checkbox checkbox-primary checkbox-sm mt-0.5" required />
            <span class="text-sm">
              J'accepte les
              <NuxtLink to="/cgv" class="link link-primary">conditions générales</NuxtLink>
              et la
              <NuxtLink to="/politique-de-confidentialite" class="link link-primary">politique de confidentialité</NuxtLink>
              <span aria-hidden="true"  class="text-error">*</span>
            </span>
          </label>

          <label class="flex cursor-pointer items-start gap-3">
            <input type="checkbox" name="newsletter" class="checkbox checkbox-primary checkbox-sm mt-0.5" />
            <span class="text-sm">Je souhaite recevoir la newsletter (recettes, nouveautés, produits de saison)</span>
          </label>
        </div>
        <div aria-live="polite" >
        <div v-if="etat ==='succes'" role="status" class="alert alert-success">
            <Icon name="feather:check-circle" class="size-5" aria-hidden="true" />
            <span>Votre compte a été créé ! <NuxtLink to="/connexion" class="link font-medium">Se connecter</NuxtLink></span>
        </div>
        <div v-else-if="etat === 'erreur'" role="alert" class="alert alert-error">
            <Icon name="feather:alert-circle" class="size-5" aria-hidden="true" />
            <span>{{ messageErreur }}</span>
        </div>
        </div>

        <button :disabled="isDisabled" :class="{[btnColor.disabled] :isDisabled}"  type="submit" class="btn btn-primary w-full">
          <Icon name="feather:user-plus" class="size-4" aria-hidden="true" />
          Créer mon compte
        </button>

        <p class="text-center text-sm text-base-content/70">
          Déjà un compte ?
          <NuxtLink to="/connexion" class="link link-primary font-medium">Se connecter</NuxtLink>
        </p>
      </form>
    </div>
  </section>
</template>

<script setup lang="ts">


const  btnColor= {
    'disabled': 'bg-gray-500'
}

 
const conditionColor={
    'invvalid': 'text-red-600'
}

const nom = ref('')
const prenom = ref('')
const email =ref('')
const telephone = ref('')
const Password=ref('')
const  verifyPassword=ref('')
const conditionsGeneral=ref(false)
const isDisabled = ref (false)
// const isSubmit = ref(false)
//email
const emailPourErreur = ref('') // va recuperer la valdur final de limage a chaque clique
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

watch(email, (nouvelleValeur, _anciennevaleur, onCleanup)=>{
    const minuteur = setTimeout(()=>{
        emailPourErreur.value=nouvelleValeur
    }, 1000)
    onCleanup(()=>clearTimeout(minuteur))
})
const afficherErreurEmail=computed(()=>{
    const valeur = emailPourErreur.value.trim()
    return valeur.length>0 && !emailRegex.test(valeur)
})

//nom
const nomPrenomRegex = /^(?:(?=.{3,20}$)[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '’-][A-Za-zÀ-ÖØ-öø-ÿ]+)*)?$/
const nomPourErreur=ref('')


watch(nom,(nouvelleValeur, _anciennValeur, onCleanup)=>{
    const minuteur = setTimeout(()=>{
     nomPourErreur.value=nouvelleValeur
    }, 1000)
    onCleanup(()=>clearTimeout(minuteur))
})

const afficherErreurNom= computed(()=>{
    const valeur = nomPourErreur.value
    return valeur.length>0 && !nomPrenomRegex.test(valeur)
})
//prenom

const prenomErreur = ref('')

watch(prenom, (nouvelleValeur, ancienneValeur, onCleanup)=>{
    const minuteur = setTimeout(()=>{
        prenomErreur.value= nouvelleValeur
    }, 1000)
    onCleanup(()=>clearTimeout(minuteur))
})

const afficherErreurPrenom = computed(()=>{
    const valeur = prenomErreur.value.trim()
    return valeur.length>0 && !nomPrenomRegex.test(valeur)
})

const telephoneRegex = /^(?:0|\+33)[567]\d{8}$/
const telephonePourErreur =ref('')
watch(telephone,(nouvelleValeur, _ancienneValeur, onCleanup)=>{
    const minuteur = setTimeout(()=>{
        telephonePourErreur.value=nouvelleValeur
    }, 1000)
    onCleanup(()=>clearTimeout(minuteur))
})

const afficherErreurTelephone = computed(()=>{
    const valeur = telephonePourErreur.value.trim()
    return valeur.length>0 && !telephoneRegex.test(valeur)
})
const regexPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])(?!.*\s)(?!.*(.)\1\1).{12,72}$/
const regexMinCaractere = /^.{12,72}$/
const regexUneMinuscule = /[a-z]/
const regexUneMajuscule = /[A-Z]/
const regexUnChiffre = /\d/
const regexCaractereSpeciql = /[^A-Za-z0-9\s]/ 
const regexNoSpace = /^\S*$/
const regexNoSameCarac = /^(?!.*(.)\1\1)/
const passwordPourError= ref('')


watch(Password, (nouvelleValeur, _ancienneValeur, onCleanup)=>{
    const minuteur = setTimeout(()=>{
        passwordPourError.value=nouvelleValeur
    },1000)
    onCleanup(()=>clearTimeout(minuteur))
})

const ErreurPasswordMincaractere = computed(()=>{
    const valeur = passwordPourError.value.trim()
    return valeur.length>0 && !regexMinCaractere.test(valeur)
})
const ErreurPasswordMinuscule = computed(()=>{
    const valeur = passwordPourError.value.trim()
    return valeur.length>0 && !regexUneMinuscule.test(valeur)
})
const ErreurPasswordMajuscule = computed(()=>{
    const valeur = passwordPourError.value.trim()
    return valeur.length>0 && !regexUneMajuscule.test(valeur)
})
const ErreurPasswordUnChiffre = computed(()=>{
    const valeur = passwordPourError.value.trim()
    return valeur.length>0 && !regexUnChiffre.test(valeur)
})
const ErreurPasswordCaractèreSpe = computed(()=>{
    const valeur = passwordPourError.value.trim()
    return valeur.length>0 && !regexCaractereSpeciql.test(valeur)
})
const ErreurPasswordNoSpace = computed(()=>{
    const valeur = passwordPourError.value.trim()
    return valeur.length>0 && !regexNoSpace.test(valeur)
})
const ErreurPasswordNoSameCarac = computed(()=>{
    const valeur = passwordPourError.value.trim()
    return valeur.length>0 && !regexNoSameCarac.test(valeur)
})

const verifyPasswordErreur = ref('')
watch(verifyPassword, (nouvelleValeur, ancienneValeur, onCleanup)=>{
    const minuteur = setTimeout(()=>{
        verifyPasswordErreur.value=nouvelleValeur
    },1000)
    onCleanup(()=>clearTimeout(minuteur))
})
const AfficherVerifyError = computed(()=>{
    const valeur = verifyPasswordErreur.value.trim()
    if (!(valeur===passwordPourError.value) && valeur.length>0){
        return true
    }
    return false
})
const isChampsRemplis= computed(()=>{
    if(nom.value.trim() &&
     prenom.value.trim() && 
     email.value.trim() && 
     telephone.value.trim() &&
     Password.value.trim() &&
     verifyPassword.value.trim() &&
     conditionsGeneral.value===true) 
       return true
})
 
const isFormulaireValide = computed(()=>{
    if( 
    isChampsRemplis.value &&
    nomPrenomRegex.test(nom.value.trim()) &&
    nomPrenomRegex.test(prenom.value.trim()) &&
    emailRegex.test(email.value.trim()) &&
    telephoneRegex.test(telephone.value.trim()) &&
    regexPasswordValid.test(Password.value) &&
    regexPasswordValid.test(verifyPassword.value) && 
    conditionsGeneral.value === true &&
    Password.value === verifyPassword.value
                                     ) 
    return true
}) 

const api = useApi()
const etat = ref<'repos'|'envoi'|'succes'|'erreur'>('repos')
const messageErreur = ref('')

async function soumettre() {
    if(!isFormulaireValide.value)return
    messageErreur.value = ''
    isDisabled.value=true
    try {
        etat.value= 'envoi'
        

        await api('/utilisateur',{
            method: 'POST',
            body: {
                nom: nom.value.trim(),
                prenom: prenom.value.trim(),
                mail: email.value.trim(),
                telephone: telephone.value.trim(),
                motDePasse: Password.value
            }
        })
        // isSubmit.value=true
        etat.value= 'succes'
        setTimeout(()=>(etat.value = 'repos' ), 5000)
        nom.value=''
        prenom.value=''
        email.value=''
        telephone.value=''
        Password.value=''
        verifyPassword.value=''
        conditionsGeneral.value=false

        
        
    } catch (error) {
        etat.value='erreur'

        const statut = (error as { statusCode?: number }).statusCode

        if (statut === 409) {
            messageErreur.value = 'Cette adresse e-mail est déjà utilisée. Connectez-vous ou utilisez une autre adresse.'
        } else if (statut === 400) {
            messageErreur.value = 'Certaines informations sont invalides. Vérifiez le formulaire.'
        } else if (statut === undefined) {
            messageErreur.value = 'Impossible de joindre le serveur. Vérifiez votre connexion et réessayez.'
        } else {
            messageErreur.value = 'Une erreur est survenue. Réessayez dans quelques instants.'
        }

        
    } finally {
        
        isDisabled.value= false
    }
    
}
</script>