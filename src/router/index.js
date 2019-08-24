// liste les routes pour les pages et affiche les vues
import Vue from 'vue'
import Router from 'vue-router'
import VueRessource from 'vue-resource'
import Accueil from '@/components/Accueil'
import Liste_entreprise from '@/components/entreprises/Liste_entreprise'
import Contact from '@/components/contacts/Contact'
import addContact from '@/components/AddContact'
import addEntreprise from '@/components/AddEntreprise'
import entreprise from '@/components/entreprises/Entreprise'
import DataTableEntreprise from '@/components/DataTableEntreprise.vue'
import DataTableContact from '@/components/DataTableContact.vue'

Vue.use(Router)
Vue.use(VueRessource)

export default new Router({
      name:'Table',
      components: {
        DataTableEntreprise,
        DataTableContact
      },

  routes: [{
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/listeEntreprise',
      name: 'liste_entreprise',
      component: Liste_entreprise
    },
    {
      path: '/listeContact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/addContact',
      name: 'editionContact',
      component: addContact
    },
    {
      path: '/addEntreprise',
      name: 'addEntreprise',
      component: addEntreprise
    },
    {
      path: '/entreprise',
      name: 'Entreprise',
      component: entreprise
    }
   
  ]
})
