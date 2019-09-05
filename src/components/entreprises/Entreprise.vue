<template>
      <div class="col-md-12">
    <div class="table-responsive">
      <table class="table table-striped table-bordered" style="width:100%">
          <thead width="40rem">
            <H1>Entreprise</H1>
              <tr>
                  <th class="align-middle" scope="col">Suppression, modification</th>
                  <th class="align-middle" scope="col">#</th>
                  <th class="align-middle" scope="col" >Nom</th>
                  <th class="align-middle" scope="col">Adresse</th>
                  <th class="align-middle" scope="col">Code postal</th>
                  <th class="align-middle" scope="col">Ville</th>
                  <th class="align-middle" scope="col">Téléphone</th>
                  <th class="align-middle" scope="col" >Email</th>
                  <th class="align-middle" scope="col">Siret</th>
                  <th class="align-middle" scope="col">Statut</th>
                  
              </tr>
          </thead>
          <tbody>
        
              <tr v-for="(entreprise) in (entreprises)" :key="entreprise.identreprises">
                <td class="align-middle"><button type="button" class="btn btn-light pull-right" @click="deleteEntreprise(entreprise.identreprises)">🗑</button>
                  <button type="button" class="btn btn-light pull-right" @click="$router.push({name: 'UpdateEntreprise' ,params: {id: `${entreprise.identreprises}`}})">🖍</button></td>
                <td class="align-middle">{{entreprise.identreprises }}</td>
                <td class="align-middle">{{entreprise.entname}}</td>
                <td class="align-middle">{{entreprise.entadress}}</td>
                <td class="align-middle">{{entreprise.entzip}}</td>
                <td class="align-middle">{{entreprise.entcity}}</td>
                <td class="align-middle">{{entreprise.entphone}}</td>
                <td class="align-middle">{{entreprise.entmail}}</td>
                <td class="align-middle">{{entreprise.entsiret}}</td>
                <td class="align-middle">{{entreprise.entstatut}}</td>
               
              </tr>
          </tbody>
      </table>
    </div>
    <br>
    <div class="table-responsive">
      <table class="table table-striped table-bordered" style="width:100%">
          <thead width="40rem">
            <H1> Contact</H1>
              <tr>
               
                  <th scope="col">#</th>
                  <th scope="col" >Nom</th>
                  <th scope="col" >Prénom</th>
                  <th scope="col">Adresse</th>
                  <th scope="col">Code postal</th>
                  <th scope="col">Ville</th>
                  <th scope="col" >Email</th>
                  <th scope="col">Téléphone</th>
                  <th scope="col">Fonction</th>
                  
              </tr>
          </thead>
          
          <tbody>
              <tr v-for="(entreprise) in (entreprises)" :key="entreprise.identreprises">
                <td>{{entreprise.id_contact}}</td>
                <td>{{entreprise.ctsurname}}</td>
                <td>{{entreprise.ctname}}</td>
                <td>{{entreprise.ctadress}}</td>
                <td>{{entreprise.ctzip}}</td>
                <td>{{entreprise.ctcity}}</td>
                <td>{{entreprise.ctemail}}</td>
                <td>{{entreprise.ctphone}}</td>
                <td>{{entreprise.ctfunction}}</td>
              
              </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>
<script>
    import axios from "axios";
    export default {
    name: "entreprise",
    props: {
    id: String,
  
    },
    data: ()=>({
        entreprises:[],
        contacts:[],
        
    }),
    methods :{

     
      
        getOneEntreprise: function() {
        axios.get(`https://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/entreprises/${this.id}`).then((response) => {
        this.entreprises = response.data;});
      },
       deleteEntreprise: function(id) { 
          let currentObj = this;
        axios.delete(`https://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/entreprises/${id}`).then((response)=> 
        currentObj.$router.push('/listeEntreprise'));
      },
    },

    created() {
    this.getOneEntreprise();
      },    
    watch: {
    $route: function() {
      this.getOneEntreprise();
      }
    },     
}


</script>
<style>
.btn-light{
margin-top: 0.25rem;
 background:rgb(247, 247, 247);
 border-color:#ffffff;
  color: #fff;
  font-size: 14px;
  border-radius: 0.5em;
  padding: 0 1em;
  position: relative;
  overflow: hidden;
  line-height: 32px;
   }
.btn-light:after{
   content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  background: linear-gradient(to bottom, rgba(229, 172, 142, 0), rgba(255,255,255,0.5) 50%, rgba(229, 172, 142, 0));
  transform: rotateZ(60deg) translate(-5em, 7.5em);
   }
   .btn-light:hover::after, .btn-light:focus::after {
  animation: sheen 1s forwards;
}
@keyframes sheen {
  100% {
    transform: rotateZ(60deg) translate(1em, -9em);
  }
}

</style>