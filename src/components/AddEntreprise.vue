<template>
  <div class="container-fluid mt-3">
    <h4 class="mb-2">Création d'une nouvelle entreprise</h4>
    <b-card bg-variant="light">
      <form>
        <div class="form-row">
          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="nom" label="Nom :">
              <b-form-input
                id="nom"
                class="form-control"
                v-model="form.surname"
                required
                placeholder="Obligatoire"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="adresse" label="Adresse :">
              <b-form-input id="adresse" v-model="form.adress" required placeholder="Obligatoire"></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="zip" label="Code postal :">
              <b-form-input
                id="zip"
                class="form-control"
                v-model="form.zip"
                maxlength="5"
                required
                placeholder="Obligatoire"
              ></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="ville" label="Ville :">
              <b-form-input id="ville" v-model="form.city" required placeholder="Obligatoire"></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="email" label="E-mail :">
              <b-form-input
                id="email"
                class="form-control"
                v-model="form.email"
                type="email"
                required
                placeholder="Obligatoire"
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="siret" label="Siret :">
              <b-form-input id="siret" v-model="form.function" required placeholder="Obligatoire"></b-form-input>
            </b-form-group>
          </div>

          <div class="form-group col-sm-5">
            <b-form-group label-cols-sm="3" label-align-sm="right" id="phone" label="Téléphone :">
              <b-form-input
                id="phone"
                v-model="form.phone"
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
                v-model="form.statut"
                required
                placeholder="fournisseur, premier contact ..."
              ></b-form-input>
            </b-form-group>
          </div>
          <div class="form-group col-sm-9">
            <b-form-group label-cols-sm="3" label-align-lg="right" id="idcontact" label="Contact :">
              <b-form-select
                v-model="contacts_id_contact"
                :options="options"
                size="sm"
                class="mt-1"
              ></b-form-select>
            </b-form-group>
          </div>
        </div>

        <button type="submit" class="btn btn-primary">Valider</button>
        <b-button type="reset" variant="danger">Effacer</b-button>
      </form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "addEntreprise",
  data() {
    return {
      contacts_id_contact: null,
      options: [
        { value: null, text: "Associez un contact si celui-ci est déjà crée" }
      ],
      form: {
        name: "",
        adress: "",
        zip: "",
        city: "",
        phone: "",
        email: "",
        siret: "",
        contact: "",
        statut: ""
      },
      show: true
    };
  },

  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(evt) {
      evt.preventDefault();
      // Reset our form values
      this.form.name = "";
      this.form.adress = "";
      this.form.zip = "";
      this.form.city = "";
      this.form.phone = "";
      this.form.email = "";
      this.form.siret = "";
      this.form.contact = "";
      this.form.statut = "";
      // Trick to reset/clear native browser form validation state
      this.show = false;
      this.$nextTick(() => {
        this.show = true;
      });
    }
  }
};
</script>
