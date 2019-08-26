<template>
  <div class="container-fluid mt-3">
    
    <b-card bg-variant="light">
      <h4 class="mb-2">Mise à jour de {{entreprises.entname}} </h4>
      <form @submit.prevent>
        <div class="form-row">
          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="nom" label="Nom :">
              <b-form-input
                id="nom"
                class="form-control"
                v-model="entreprises.entname"
                required
                placeholder="Obligatoire"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="adresse" label="Adresse :">
              <b-form-input id="adresse" v-model="entreprises.entadress" required placeholder="Obligatoire"></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="zip" label="Code postal :">
              <b-form-input
                id="zip"
                class="form-control"
                v-model="entreprises.entzip"
                maxlength="5"
                required
                placeholder="Obligatoire"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="ville" label="Ville :">
              <b-form-input id="ville" v-model="entreprises.entcity" required placeholder="Obligatoire"></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="email" label="E-mail :">
              <b-form-input
                id="email"
                class="form-control"
                v-model="entreprises.entmail"
                type="email"
                required
                placeholder="Obligatoire"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="siret" label="Siret :">
              <b-form-input id="siret" v-model="entreprises.entsiret" required placeholder="Obligatoire"></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="phone" label="Téléphone :">
              <b-form-input
                id="phone"
                v-model="entreprises.entphone"
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
                v-model="entreprises.entstatut"
                required
                placeholder="fournisseur, premier contact ..."
              ></b-form-input>
            </b-form-group>
          </div>
        </div>

        <button type="submit" @click="postEntreprise()" class="btn btn-primary">Valider</button>
      </form>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UpdateEntreprise",
  props: {
    id: String,
    },
    
  data() {
    return {
        entreprises:[],
        entname: '',
        entadress: '',
        entzip: '',
        entcity: '',
        entphone: '',
        entmail: '',
        entsiret: '',
        entstatut: '',
        contacts_id_contact:''
        
    };
  },

  methods: {

    getOneEntreprise: function() {
        axios.get(`https://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/entreprises/${this.id}`).then((response) => {
        this.entreprises = response.data[0];});
        },

    postEntreprise(){
            let currentObj = this;

      axios.put(`https://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/entreprises/${this.id}`,{
        entname: this.entreprises.entname,
        entadress: this.entreprises.entadress,
        entzip: this.entreprises.entzip,
        entcity: this.entreprises.entcity,
        entphone: this.entreprises.entphone,
        entmail: this.entreprises.entmail,
        entsiret: this.entreprises.entsiret,
        entstatut: this.entreprises.entstatut,
        contacts_id_contact: this.entreprises.contacts_id_contact,
     
      }).then(function (response){
        alert('Entreprise modifiée !');
        currentObj.$router.push('/listeEntreprise');
      }).catch(function(error){
        alert(error);
      });
    },
  },
    created () {
        this.getOneEntreprise();
                },
        watch: {
            $route: function() {
            this.getOneEntreprise();
                                }
            }, 
};
</script>