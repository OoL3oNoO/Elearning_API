<template>
  <div class="container-fluid mt-3">
    <b-card bg-variant="light">
      <h4 class="mb-2">Ajout d'un nouveau contact</h4>
      <ValidationObserver ref="observer" tag="form" v-slot="{ invalid }">
        <form @submit.prevent>
          <div class="form-row">
            <div class="form-group col-sm-5">
              <b-form-group label-cols-sm="3" label-align-sm="right" id="nom" label="Nom* :">
                <validation-provider
                  name="nom"
                  :rules="{ required: true, alpha_spaces: true }"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    id="nom"
                    class="form-control"
                    v-model="ctsurname"
                    placeholder="Obligatoire"
                    type="text"
                  ></b-form-input>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </b-form-group>
            </div>
            <div class="form-group col-sm-6">
              <b-form-group label-cols-sm="3" label-align-sm="right" id="prenom" label="Prénom* :">
                <validation-provider
                  name="prénom"
                  :rules="{ required: true, alpha_spaces: true }"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    id="prenom"
                    class="form-control"
                    v-model="ctname"
                    placeholder="Obligatoire"
                  ></b-form-input>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </b-form-group>
            </div>

            <div class="form-group col-sm-5">
              <b-form-group
                label-cols-sm="3"
                label-align-sm="right"
                id="adresse"
                label="Adresse* :"
              >
                <validation-provider name="adresse" :rules="{ required: true }" v-slot="{ errors }">
                  <b-form-input
                    id="adresse"
                    class="form-control"
                    v-model="ctadress"
                    placeholder="Obligatoire"
                  ></b-form-input>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </b-form-group>
            </div>

            <div class="form-group col-sm-6">
              <b-form-group
                label-cols-sm="3"
                label-align-sm="right"
                id="zip"
                label="Code postal* :"
              >
                <validation-provider
                  name="code postal"
                  :rules="{ required: true,numeric:true, max: 5 }"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    id="zip"
                    class="form-control"
                    v-model="ctzip"
                    placeholder="5 chiffres maximum"
                  ></b-form-input>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </b-form-group>
            </div>

            <div class="form-group col-sm-5">
              <b-form-group label-cols-sm="3" label-align-sm="right" id="ville" label="Ville* :">
                <validation-provider
                  name="ville"
                  :rules="{ required: true, alpha_spaces: true }"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    id="ville"
                    class="form-control"
                    v-model="ctcity"
                    placeholder="Obligatoire"
                  ></b-form-input>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </b-form-group>
            </div>

            <div class="form-group col-sm-6">
              <b-form-group label-cols-sm="3" label-align-sm="right" id="email" label="E-mail* :">
                <validation-provider
                  name="email"
                  :rules="{ required: true, email:true }"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    id="email"
                    class="form-control"
                    v-model="ctemail"
                    type="email"
                    placeholder="exemple@domaine.com"
                  ></b-form-input>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </b-form-group>
            </div>

            <div class="form-group col-sm-5">
              <b-form-group
                label-cols-sm="3"
                label-align-sm="right"
                id="function"
                label="Fonction* :"
              >
                <validation-provider
                  name="fonction"
                  :rules="{ required: true, }"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    id="function"
                    class="form-control"
                    v-model="ctfunction"
                    placeholder="Dirigeant, secrétaire, commercial"
                  ></b-form-input>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </b-form-group>
            </div>

            <div class="form-group col-sm-6">
              <b-form-group
                label-cols-sm="3"
                label-align-sm="right"
                id="phone"
                label="Téléphone* :"
              >
                <validation-provider
                  name="télephone"
                  :rules="{ required: true, numeric:true, max:10 }"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    id="phone"
                    class="form-control"
                    v-model="ctphone"
                    type="tel"
                    pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
                    placeholder="portable ou fixe au format : 01234567890"
                  ></b-form-input>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </b-form-group>
            </div>

            <div class="form-group col-sm-9">
              <b-form-group
                label-cols-sm="3"
                label-align-lg="right"
                id="idcontact"
                label="Entreprise liée* :"
              >
                <validation-provider
                  name="entreprise liée"
                  :rules="{ required: entreprises.identreprises }"
                  v-slot="{ errors }"
                >
                  <b-form-select v-model="entreprises_identreprises">
                    <option value disabled selected>Veuillez choisir une entreprise</option>
                    <option
                      v-for="(entreprise, index) in (entreprises)"
                      :value="entreprise.identreprises"
                      :key="index"
                      size="sm"
                      class="mt-1"
                    >{{entreprise.entname}}</option>
                  </b-form-select>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
                <span>Selectionné: {{entreprises_identreprises}}</span>
              </b-form-group>
            </div>
          </div>
          <button
            :disabled="invalid"
            type="submit"
            class="btn btn-primary"
            @click="postContact()"
          >Valider</button>
        </form>
      </ValidationObserver>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";
import { ValidationProvider } from "vee-validate";
import { ValidationObserver } from "vee-validate";

export default {
  name: "addContact",
  props: {
    id: String
  },
  data() {
    return {
      entreprises: [],
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
    postContact() {
      let currentObj = this;
      const isValid = this.$refs.observer.validate();
      if (!isValid) {
      }
      axios
        .post(
          "https://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/contacts",
          {
            ctsurname: this.ctsurname,
            ctname: this.ctname,
            ctadress: this.ctadress,
            ctzip: this.ctzip,
            ctcity: this.ctcity,
            ctfunction: this.ctfunction,
            ctemail: this.ctemail,
            ctphone: this.ctphone,
            entreprises_identreprises: this.entreprises_identreprises
          }
        )
        .then(function(response) {
          alert("Contact ajouté !");
          currentObj.$router.push("/listeContacts");
        })
        .catch(function(error) {
          alert("Veuillez compléter tous les champs");
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
    this.getEntreprise();
  }
};
</script>
