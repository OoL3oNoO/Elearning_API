<template>
  <div class="container-fluid mt-3">
    <b-card bg-variant="light">
      <h4 class="mb-2">Modification de {{contacts.ctsurname}} {{contacts.ctname}}</h4>
      <form @submit.prevent>
        <div class="form-row">
          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="nom" label="Nom :">
              <b-form-input
                id="nom"
                class="form-control"
                v-model="contacts.ctsurname"
                required
                placeholder="Obligatoire"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="form-group col-sm-6">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="prenom" label="Prénom :">
              <b-form-input
                id="prenom"
                class="form-control"
                v-model="contacts.ctname"
                required
                placeholder="Obligatoire"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="adresse" label="Adresse :">
              <b-form-input
                id="adresse"
                class="form-control"
                v-model="contacts.ctadress"
                required
                placeholder="Obligatoire"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-6">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="zip" label="Code postal :">
              <b-form-input
                id="zip"
                class="form-control"
                v-model="contacts.ctzip"
                required
                placeholder="Obligatoire"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="ville" label="Ville :">
              <b-form-input
                id="ville"
                class="form-control"
                v-model="contacts.ctcity"
                required
                placeholder="Obligatoire"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-6">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="email" label="E-mail :">
              <b-form-input
                id="email"
                class="form-control"
                v-model="contacts.ctemail"
                type="email"
                required
                placeholder="Obligatoire"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-5">
            <b-form-group
              label-cols-sm="3"
              label-align-sm="right"
              id="function"
              label="Poste occupé :"
            >
              <b-form-input
                id="function"
                class="form-control"
                v-model="contacts.ctfunction"
                required
                placeholder="Obligatoire"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-6">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="phone" label="Téléphone :">
              <b-form-input
                id="phone"
                class="form-control"
                v-model="contacts.ctphone"
                type="tel"
                required
                pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
                placeholder="01234567890"
              ></b-form-input>
            </b-form-group>
          </div>
          <!-- <div class="form-group col-sm-9">
            <b-form-group
              label-cols-sm="3"
              label-align-lg="right"
              id="idcontact"
              label="Contact liée :"
            >
          <b-form-select v-model="selected" :options="options" size="sm" class="mt-1"></b-form-select>-->
          <!-- </b-form-group> -->
           <!-- </div> -->
        </div>
        <button type="submit" class="btn btn-primary" @click="postContact()">Valider</button>
      </form>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UpdateContact",
  props: {
    id: String,
    },
    
  data() {
    return {
        contacts:[],
        ctsurname: '',
        ctname: '',
        ctadress: '',
        ctzip: '',
        ctcity: '',
        ctemail: '',
        entsiret: '',
        entstatut: '',
        contacts_id_contact:''
        
    };
  },

  methods: {

    getOneContact: function() {
        axios.get(`http://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/contacts/${this.id}`).then((response) => {
        this.contacts = response.data[0];});
        },

    postContact(){
            let currentObj = this;

      axios.put(`http://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/contacts/${this.id}`,{
        ctsurname: this.contacts.ctsurname,
        ctname: this.contacts.ctname,
        ctadress: this.contacts.ctadress,
        ctzip: this.contacts.ctzip,
        ctcity: this.contacts.ctcity,
        ctemail: this.contacts.ctemail,
        ctfunction: this.contacts.ctfunction,
        ctphone: this.contacts.ctphone,
        entreprises_identreprises: this.contacts.entreprises_identreprises,
     
      }).then(function (response){
        alert('Contact modifiée !');
        currentObj.$router.push('/listeContacts');
      }).catch(function(error){
        alert(error);
      });
    },
  },
    created () {
        this.getOneContact();
                },
        watch: {
            $route: function() {
            this.getOneContact();
                                }
            }, 
};
</script>