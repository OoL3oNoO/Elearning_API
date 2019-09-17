<template>
  <div class="container-fluid mt-3">
    <b-card bg-variant="light">
      <h4 class="mb-2">Création d'une nouvelle entreprise</h4>
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
                    v-model="entname"
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
                <validation-provider name="adresse" :rules="{ required: true}" v-slot="{ errors }">
                  <b-form-input id="adresse" v-model="entadress" placeholder="Obligatoire"></b-form-input>
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
                    v-model="entzip"
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
                  <b-form-input id="ville" v-model="entcity" placeholder="Obligatoire"></b-form-input>
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
                    v-model="entmail"
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
                  <b-form-input id="siret" v-model="entsiret" placeholder="14 chiffres"></b-form-input>
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
                    v-model="entphone"
                    type="tel"
                    pattern="[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}[0-9]{2}"
                    placeholder=" portable ou fixe au format : 01234567890"
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
                    v-model="entstatut"
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
  name: "addEntreprise",
  data() {
    return {
      entname: "",
      entadress: "",
      entzip: "",
      entcity: "",
      entphone: "",
      entmail: "",
      entsiret: "",
      entstatut: ""
    };
  },

  methods: {
    postEntreprise() {
      let currentObj = this;
      const isValid = this.$refs.observer.validate();
      if (!isValid) {
      }
      axios
        .post(
          "https://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/entreprises",
          {
            entname: this.entname,
            entadress: this.entadress,
            entzip: this.entzip,
            entcity: this.entcity,
            entphone: this.entphone,
            entmail: this.entmail,
            entsiret: this.entsiret,
            entstatut: this.entstatut
          }
        )
        .then(function(response) {
          alert("Entreprise ajoutée !");
          currentObj.$router.push("/listeEntreprise");
        })
        .catch(function(error) {
          alert("Veuillez compléter tous les champs");
        });
    }
  }
};
</script>
