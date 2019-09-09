<template>
  <div class="container-fluid mt-3">
    <b-card bg-variant="light">
      <h4 class="mb-2">Modification de {{contacts.ctsurname}} {{contacts.ctname}}</h4>
      <ValidationObserver ref="observer" tag="form" v-slot="{ invalid }">
        <form @submit.prevent>
          <div class="form-row">
            <div class="form-group col-sm-5">
              <b-form-group label-cols-sm="3" label-align-sm="right" id="nom" label="Nom* :">
                <validation-provider
                  name="nom"
                  :rules="{ required: true, alpha_spaces: true  }"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    id="nom"
                    class="form-control"
                    v-model="contacts.ctsurname"
                    required
                    placeholder="Obligatoire"
                  ></b-form-input>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </b-form-group>
            </div>
            <div class="form-group col-sm-6">
              <b-form-group label-cols-sm="3" label-align-sm="right" id="prenom" label="Prénom* :">
                <validation-provider
                  name="prénom"
                  :rules="{ required: true,alpha_spaces: true }"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    id="prenom"
                    class="form-control"
                    v-model="contacts.ctname"
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
                    v-model="contacts.ctadress"
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
                    v-model="contacts.ctzip"
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
                  :rules="{ required: true, alpha_spaces: true}"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    id="ville"
                    class="form-control"
                    v-model="contacts.ctcity"
                    required
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
                    v-model="contacts.ctemail"
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
                  :rules="{ required: true,alpha_spaces: true }"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    id="function"
                    class="form-control"
                    v-model="contacts.ctfunction"
                    required
                    placeholder="Dirigeant, secrétaire, commercial"
                  ></b-form-input>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </b-form-group>
            </div>

            <div class="form-group col-sm-6">
              <b-form-group label-cols-sm="3" label-align-sm="right" id="phone" label="Téléphone :">
                <validation-provider
                  name="télephone"
                  :rules="{ required: true, numeric:true, max:10 }"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    id="phone"
                    class="form-control"
                    v-model="contacts.ctphone"
                    type="tel"
                    required
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
                  <b-form-select v-model="contacts.entreprises_identreprises">
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
  name: "UpdateContact",
  props: {
    id: String
  },

  data() {
    return {
      contacts: [],
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
      const isValid = this.$refs.observer.validate();
      if (!isValid) {
      }
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