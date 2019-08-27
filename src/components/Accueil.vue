<template>
  <div class="accueil">
    <h1>{{ msg }}</h1>
    <button
      class="btn btn-info btn-lg btn-block"
      role="button" @click="$router.push({name: 'liste_entreprise'})"
    >Liste des entreprises</button>
    <button
      class="btn btn-success btn-lg btn-block"
      role="button" @click="$router.push({name: 'contacts'})"
    >Liste des contacts</button>
    <button
      class="btn btn-primary btn-lg btn-block"
      role="button" @click="$router.push({name: 'addEntreprise'})"
    >Créer une entreprise</button>
    <button
      
      class="btn btn-secondary btn-lg btn-block"
      role="button" @click="$router.push({name: 'editionContact'})"
    >Créer un contact</button>
  </div>
</template>

<script>
export default {
  name: "accueil",
  data() {
    return {
      msg: "Bienvenue sur votre outil de gestion de contact"
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
