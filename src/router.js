// liste les routes pour les pages et affiche les vues
import Vue from "vue";
import Router from "vue-router";
import VueRessource from "vue-resource";
import Accueil from "@/components/Accueil";
import Liste_entreprise from "@/components/entreprises/Liste_entreprise";
import Contacts from "@/components/contacts/Contacts";
import Contact from "@/components/contacts/Contact";
import updateContact from "@/components/contacts/UpdateContact";
import addContact from "@/components/contacts/AddContact";
import addEntreprise from "@/components/entreprises/AddEntreprise";
import entreprise from "@/components/entreprises/Entreprise";
import updateEntreprise from "@/components/entreprises/UpdateEntreprise";
import DataTableEntreprise from "@/components/entreprises/DataTableEntreprise.vue";
import DataTableContact from "@/components/contacts/DataTableContact.vue";

Vue.use(Router);
Vue.use(VueRessource);

export default new Router({
  name: "Table",
  components: {
    DataTableEntreprise,
    DataTableContact
  },

  routes: [
    {
      path: "/",
      name: "Accueil",
      component: Accueil
    },
    {
      path: "/listeEntreprise",
      name: "liste_entreprise",
      component: Liste_entreprise
    },
    {
      path: "/listeContacts",
      name: "contacts",
      component: Contacts
    },
    {
      path: "/addContact",
      name: "editionContact",
      component: addContact
    },
    {
      path: "/addEntreprise",
      name: "addEntreprise",
      component: addEntreprise
    },
    {
      path: "/entreprise/:id",
      name: "Entreprise",
      component: entreprise,
      props: true
    },
    {
      path: "/Contact/:id",
      name: "contact",
      component: Contact,
      props: true
    },
    {
      path: "/updateEntreprise/:id",
      name: "UpdateEntreprise",
      component: updateEntreprise,
      props: true
    },
    {
      path: "/updateContact/:id",
      name: "UpdateContact",
      component: updateContact,
      props: true
    }
  ]
});
