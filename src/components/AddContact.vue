<template>
  <div class="container-fluid mt-3">
    <b-card bg-variant="light">
      <h4 class="mb-2">Ajout d'un nouveau contact</h4>
      <form @submit.prevent>
        <div class="form-row">
          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="nom" label="Nom :">
              <b-form-input
                id="nom"
                class="form-control"
                v-model="ctsurname"
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
                v-model="ctname"
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
                v-model="ctadress"
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
                v-model="ctzip"
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
                v-model="ctcity"
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
                v-model="ctemail"
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
                v-model="ctfunction"
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
                v-model="ctphone"
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
              label="Entreprise liée :"
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
  name: "addContact",
  data() {
    return {
        ctsurname:"",
        ctname: "",
        ctadress: "",
        ctzip:"",
        ctcity: "",
        ctfunction:"",
        ctemail: "",
        ctphone: "",
        
    };
  },
  methods: {
    postContact(){
      let currentObj = this;

      axios.post('http://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/contacts',{
        ctsurname:  this.ctsurname,
        ctname:     this.ctname,
        ctadress:   this.ctadress,
        ctzip:      this.ctzip,
        ctcity:     this.ctcity,
        ctfunction: this.ctfunction,
        ctemail:    this.ctemail,
        ctphone:    this.ctphone
      }).then(function (response){
        alert('Contact ajouté !');
        currentObj.$router.push('/listeContacts');
      }).catch(function(error){
        alert(error);
      });
    }
  }
}


</script>
