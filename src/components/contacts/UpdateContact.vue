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
          <div class="form-group col-sm-9">
            <b-form-group
              label-cols-sm="3"
              label-align-lg="right"
              id="idcontact"
              label="Entreprise liée :"
            >
              <b-form-select v-model="contacts.entreprises_identreprises">
                <option
                  v-for="(entreprise, index) in (entreprises)"
                  :value="entreprise.identreprises"
                  :key="index"
                  size="sm"
                  class="mt-1"
                >{{entreprise.entname}}</option>
              </b-form-select>
              <span>Selectionné: {{entreprises_identreprises}}</span>
            </b-form-group>
          </div>
        </div>
        <button type="submit" class="btn btn-primary" @click="postContact()">Valider</button>
      </form>
    </b-card>
    <p v-if="errors.length" class="ml-2">
      <b style="color :red">Veuillez corriger les erreurs suivantes :</b>
    </p>
    <ul>
      <li v-for="(error, index) in errors" :key="index">{{ error }}</li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UpdateContact",
  props: {
    id: String
  },

  data() {
    return {
      contacts: [],
      entreprises: [],
      errors: [],
      ctsurname: "",
      ctname: "",
      ctadress: "",
      ctzip: "",
      ctcity: "",
      ctfunction: "",
      ctemail: "",
      ctphone: "",
      entreprises_identreprises: ""
    };
  },

  methods: {
    checkForm: function() {
      this.errors = [];
      if (this.ctsurname === "") {
        this.errors.push("Nom requis");
      }
      if (this.ctname === "") {
        this.errors.push("Prénom requis");
      }
      if (this.ctadress === "") {
        this.errors.push("Adresse requise");
      }
      if (this.ctzip === "") {
        this.errors.push("Code Postal requis");
      }
      if (this.ctcity === "") {
        this.errors.push("Ville requise");
      }
      if (this.ctemail === "") {
        this.errors.push("Email requis");
      }
      if (this.ctfunction === "") {
        this.errors.push("Fonction requise");
      }
      if (this.ctphone === "") {
        this.errors.push("N° de téléphone requis");
      }
      if (this.entreprises_identreprises === "") {
        this.errors.push("Veuillez choisir l'entreprise affiliée à ce contact");
      }
      if (this.errors.length) {
        this.postContact();
      }
    },
    getOneContact: function() {
      axios
        .get(
          `https://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/contacts/${this.id}`
        )
        .then(response => {
          this.contacts = response.data[0];
        });
    },

    postContact() {
      let currentObj = this;

      axios
        .put(
          `https://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/contacts/${this.id}`,
          {
            ctsurname: this.contacts.ctsurname,
            ctname: this.contacts.ctname,
            ctadress: this.contacts.ctadress,
            ctzip: this.contacts.ctzip,
            ctcity: this.contacts.ctcity,
            ctemail: this.contacts.ctemail,
            ctfunction: this.contacts.ctfunction,
            ctphone: this.contacts.ctphone,
            entreprises_identreprises: this.contacts.entreprises_identreprises
          }
        )
        .then(function(response) {
          alert("Contact modifiée !");
          currentObj.$router.push("/listeContacts");
        })
        .catch(function(error) {
          alert(error);
        });
    },
    getEntreprise: function() {
      axios
        .get(
          "https://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/entreprises"
        )
        .then(response => {
          this.entreprises = response.data;
        });
    }
  },
  created() {
    this.getOneContact();
    this.getEntreprise();
  },
  watch: {
    $route: function() {
      this.getOneContact();
      this.getEntreprise();
    }
  }
};
</script>