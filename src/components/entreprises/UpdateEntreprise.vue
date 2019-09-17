<template>
  <div class="container-fluid mt-3">
    <b-card bg-variant="light">
      <h4 class="mb-2">Mise à jour de {{entreprises.entname}}</h4>
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
                    v-model="entreprises.entname"
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
                    v-model="entreprises.entadress"
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
                    v-model="entreprises.entzip"
                    maxlength="5"
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
                  <b-form-input id="ville" v-model="entreprises.entcity" placeholder="Obligatoire"></b-form-input>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </b-form-group>
            </div>

            <div class="form-group col-sm-5">
              <b-form-group label-cols-sm="3" label-align-sm="right" id="email" label="E-mail* :">
                <validation-provider
                  name="email"
                  :rules="{ required: true, email:true }"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    id="email"
                    class="form-control"
                    v-model="entreprises.entmail"
                    type="email"
                    placeholder="exemple@domaine.com"
                  ></b-form-input>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </b-form-group>
            </div>
            <div class="form-group col-sm-5">
              <b-form-group label-cols-sm="3" label-align-sm="right" id="siret" label="Siret* :">
                <validation-provider
                  name="siret"
                  :rules="{ required: true, numeric:true, min:14,max:14 }"
                  v-slot="{ errors }"
                >
                  <b-form-input id="siret" v-model="entreprises.entsiret" placeholder="14 chiffres"></b-form-input>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </b-form-group>
            </div>

            <div class="form-group col-sm-5">
              <b-form-group
                label-cols-sm="3"
                label-align-sm="right"
                id="phone"
                label="Téléphone* :"
              >
                <validation-provider
                  name="téléphone"
                  :rules="{ required: true, numeric:true, max:10 }"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    id="phone"
                    v-model="entreprises.entphone"
                    type="tel"
                    pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
                    placeholder="portable ou fixe au format : 01234567890"
                  ></b-form-input>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </b-form-group>
            </div>
            <div class="form-group col-sm-5">
              <b-form-group label-cols-sm="3" label-align-sm="right" id="statut" label="Statut* :">
                <validation-provider
                  name="statut"
                  :rules="{ required: true, alpha_spaces: true }"
                  v-slot="{ errors }"
                >
                  <b-form-input
                    id="statut"
                    class="form-control"
                    v-model="entreprises.entstatut"
                    placeholder="fournisseur, premier contact ..."
                  ></b-form-input>
                  <span>{{ errors[0] }}</span>
                </validation-provider>
              </b-form-group>
            </div>
          </div>

          <button
            :disabled="invalid"
            type="submit"
            @click="postEntreprise()"
            class="btn btn-primary"
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
  name: "UpdateEntreprise",
  props: {
    id: String
  },

  data() {
    return {
      entreprises: [],
      entname: "",
      entadress: "",
      entzip: "",
      entcity: "",
      entphone: "",
      entmail: "",
      entsiret: "",
      entstatut: "",
      contacts_id_contact: ""
    };
  },

  methods: {
    getOneEntreprise: function() {
      axios
        .get(
          `https://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/entreprises/${this.id}`
        )
        .then(response => {
          this.entreprises = response.data[0];
        });
    },

    postEntreprise() {
      let currentObj = this;
      const isValid = this.$refs.observer.validate();
      if (!isValid) {
      }
      axios
        .put(
          `https://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/entreprises/${this.id}`,
          {
            entname: this.entreprises.entname,
            entadress: this.entreprises.entadress,
            entzip: this.entreprises.entzip,
            entcity: this.entreprises.entcity,
            entphone: this.entreprises.entphone,
            entmail: this.entreprises.entmail,
            entsiret: this.entreprises.entsiret,
            entstatut: this.entreprises.entstatut,
            contacts_id_contact: this.entreprises.contacts_id_contact
          }
        )
        .then(function(response) {
          alert("Entreprise modifiée !");
          currentObj.$router.push("/listeEntreprise");
        })
        .catch(function(error) {
          alert("Veuillez compléter tous les champs");
        });
    }
  },
  created() {
    this.getOneEntreprise();
  },
  watch: {
    $route: function() {
      this.getOneEntreprise();
    }
  }
};
</script>