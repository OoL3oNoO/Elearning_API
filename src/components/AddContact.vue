<template>
  <div class="container-fluid mt-3">
    <b-card bg-variant="light">
      <h4 class="mb-2">Ajout d'un nouveau contact</h4>
      <form>
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
          <div class="form-group col-sm-9">
            <b-form-group
              label-cols-sm="3"
              label-align-lg="right"
              id="idcontact"
              label="Entreprise liée :"
            >
              <b-form-select
                v-model="entreprises_identreprises"
                :options="options"
                size="sm"
                class="mt-1"
              ></b-form-select>
            </b-form-group>
          </div>
        </div>
        <button v-on:click.prevent="postContact" type="submit" class="btn btn-primary">Valider</button>
      </form>
    </b-card>
  </div>
</template>

<script>
export default {
  name: "addContact",
  data() {
    return {
      entreprises_identreprises: null,
      options: [
        {
          value: null,
          text: "Associez une entreprise si celle-ci est déjà créée"
        }
      ],
      ctsurname: null,
      ctname: null,
      ctadress: null,
      ctzip: null,
      ctcity: null,
      ctfunction: null,
      ctemail: null,
      ctphone: null
    };
  },

  methods: {
    postContact: async function() {
      let response = await fetch(
        `http://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io//api/v1/contacts`,
        {
          body: JSON.stringify({
            ctsurname: this.ctsurname,
            ctname: this.ctname,
            ctadress: this.ctadress,
            ctzip: this.ctzip,
            ctcity: this.ctcity,
            ctfunction: this.ctfunction,
            ctemail: this.ctemail,
            ctphone: this.ctphone,
            entreprises_identreprises: this.entreprises_identreprises
          }),
          method: "POST",
          headers: this.headers
        }
      );
      this.$router.push({ name: "Liste_entreprise" });
    }
  }
};
</script>
