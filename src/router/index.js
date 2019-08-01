// liste les routes pour les pages et affiche les vues
import Vue from 'vue'
import Router from 'vue-router'
import Accueil from '@/components/Accueil'
import Liste_entreprise from '@/components/entreprises/Liste_entreprise'
import Contact from '@/components/contacts/Contact'
import Edition from '@/components/Edition_contact'

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Accueil',
      component: Accueil
    },
    {
      path: '/liste_entreprise',
      name: 'liste_entreprise',
      component: Liste_entreprise
    },
    {
      path: '/liste_contact',
      name: 'contact',
      component: Contact
    },
    {
      path: '/edition',
      name: 'edition',
      component: Edition
    }
  ]
})
