<template>
  <div class="accueil">
    <h1>{{ msg }}</h1>
    <a
      href="http://localhost:8080/#/listeEntreprise"
      class="btn btn-info btn-lg btn-block"
      role="button"
    >Liste des entreprises</a>
    <a
      href="http://localhost:8080/#/listeContact"
      class="btn btn-success btn-lg btn-block"
      role="button"
    >Liste des contacts</a>
    <a
      href="http://localhost:8080/#/addEntreprise"
      class="btn btn-primary btn-lg btn-block"
      role="button"
    >Créer une entreprise</a>
    <a
      href="http://localhost:8080/#/addContact"
      class="btn btn-secondary btn-lg btn-block"
      role="button"
    >Créer un contact</a>
  </div>
</template>

<script>
export default {
  name: "accueil",
  data() {
    return {
      msg: "Bienvenue sur votre outils de gestion de contact"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495e;
}
.btn-success{
  background-color:#de5a34;
  border-color:#de5a34;
  }
  .btn-success:hover{
    background-color:#bd421f;
  }
</style>
