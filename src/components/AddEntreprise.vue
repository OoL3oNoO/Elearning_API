<template>
  <div class="container-fluid mt-3">
    
    <b-card bg-variant="light">
      <h4 class="mb-2">Création d'une nouvelle entreprise</h4>
      <form @submit.prevent>
        <div class="form-row">
          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="nom" label="Nom :">
              <b-form-input
                id="nom"
                class="form-control"
                v-model="entname"
                required
                placeholder="Obligatoire"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="adresse" label="Adresse :">
              <b-form-input id="adresse" v-model="entadress" required placeholder="Obligatoire"></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="zip" label="Code postal :">
              <b-form-input
                id="zip"
                class="form-control"
                v-model="entzip"
                maxlength="5"
                required
                placeholder="Obligatoire"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="ville" label="Ville :">
              <b-form-input id="ville" v-model="entcity" required placeholder="Obligatoire"></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="email" label="E-mail :">
              <b-form-input
                id="email"
                class="form-control"
                v-model="entmail"
                type="email"
                required
                placeholder="Obligatoire"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="siret" label="Siret :">
              <b-form-input id="siret" v-model="entsiret" required placeholder="Obligatoire"></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="phone" label="Téléphone :">
              <b-form-input
                id="phone"
                v-model="entphone"
                type="tel"
                required
                pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
                placeholder="01234567890"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="statut" label="Statut :">
              <b-form-input
                id="statut"
                class="form-control"
                v-model="entstatut"
                required
                placeholder="fournisseur, premier contact ..."
              ></b-form-input>
            </b-form-group>
          </div>
          <!-- <div class="form-group col-sm-9">
            <b-form-group label-cols-sm="3" label-align-lg="right" id="idcontact" label="Contact :">
              <b-form-select
                v-model="contacts_id_contact"
                :options="options"
                size="sm"
                class="mt-1"
              ></b-form-select>
            </b-form-group>
          </div> -->
        </div>

        <button type="submit" @click="postEntreprise()" class="btn btn-primary">Valider</button>
      </form>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "addEntreprise",
  data() {
    return {
      // contacts_id_contact: null,
      // options: [
      //   { value: null, text: "Associez un contact si celui-ci est déjà crée" }
      // ],
      
        entname: "",
        entadress: "",
        entzip: "",
        entcity: "",
        entphone: "",
        entmail: "",
        entsiret: "",
        entstatut: "",
        // contacts_id_contact:""
    };
  },

  methods: {
    postEntreprise(){
      let currentObj = this;

      axios.post('http://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/entreprises',{
        entname: this.entname,
        entadress: this.entadress,
        entzip: this.entzip,
        entcity: this.entcity,
        entphone: this.entphone,
        entmail: this.entmail,
        entsiret: this.entsiret,
        entstatut: this.entstatut,
        // contacts_id_contact: this.contacts_id_contact
      }).then(function (response){
        alert('Entreprise ajouté !');
        currentObj.$router.push('/listeEntreprise');
      }).catch(function(error){
        alert(error);
      });
    }
    
  }
};
</script>
