<template>
  <div id="app">
    <header>
      <span>
        Gestion de contact Trecobat
        <a v-if="this.$route.path != '/addEntreprise' && this.$route.path != '/'"
          href="http://localhost:8080/#/addEntreprise"
          class="btn btn-outline-light"
          role="button"
        > Ajouter une entreprise</a>
        <a v-if="this.$route.path != '/addContact'&&this.$route.path != '/'"
          href="http://localhost:8080/#/addContact"
          class="btn btn-outline-light"
          role="button"
        > Ajouter un contact</a>
        <a v-if="this.$route.path != '/'"
          href="http://localhost:8080/#/"
          class="btn btn-outline-light"
          role="button"
        >Accueil</a>
      </span>
    </header>
    <main>
      <div class="container-fluid">
        <img class="img-fluid" src="./assets/trecobat_header.jpg" alt="Logo de Trecobat" />
        <router-view></router-view>
      </div>
    </main>
    <footer>
      <div class="container">
        <p>
          &#9830; 2019 Haultcoeur Damien || Outils de gestion de contact
          <a
            href="https://www.trecobat.fr/"
            style="color:#c7dae1;"
          >Trecobat</a> &#9830;
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.btn-outline-light {
  float: right;
  padding-bottom: 1px;
  margin-right: 10px;
}

main {
  text-align: center;
  margin-top: 10px;
  /* overflow: hidden; */
}

header {
  margin: 0;
  height: 56px;
  padding: 0 16px 0 24px;
  background-color: #35495e;
  color: #ffffff;
}

header span {
  display: block;
  position: relative;
  font-size: 20px;
  line-height: 1;
  letter-spacing: 0.02em;
  font-weight: 400;
  box-sizing: border-box;
  padding-top: 16px;
}
footer {
  text-align: center;
  background-color: #35495e;
  color: #ffffff;
  display: flex;
  justify-content: center;
  vertical-align: middle;
  padding: 0.3rem;
  margin-top: 0.5rem;
}
</style>
