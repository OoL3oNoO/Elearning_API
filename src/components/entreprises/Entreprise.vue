<template>
      <div class="col-md-12">
    <div class="table-responsive">
      <table class="table table-striped table-bordered" style="width:100%">
          <thead width="40rem">
              <tr>
                  <th scope="col">Suppression, modification</th>
                  <th scope="col">#</th>
                  <th scope="col" >Nom</th>
                  <th scope="col">Adresse</th>
                  <th scope="col">Code postal</th>
                  <th scope="col">Ville</th>
                  <th scope="col">Téléphone</th>
                  <th scope="col" >Email</th>
                  <th scope="col">Siret</th>
                  <th scope="col">Statut</th>
                  <th scope="col">Entreprise</th>
              </tr>
          </thead>
          <tbody>
        
              <tr v-for="(entreprise) in (entreprises)" :key="entreprise.identreprises">
                <button type="button" class="btn btn-danger pull-right" @click="deleteEntreprise(entreprise.identreprises)">🗑</button>
                <button type="button" class="btn btn-danger pull-right" @click="$router.push({name: 'UpdateEntreprise' ,params: {id: `${entreprise.identreprises}`}})">🖍</button>
                <td>{{entreprise.identreprises }}</td>
                <td>{{entreprise.entname}}</td>
                <td>{{entreprise.entadress}}</td>
                <td>{{entreprise.entzip}}</td>
                <td>{{entreprise.entcity}}</td>
                <td>{{entreprise.entphone}}</td>
                <td>{{entreprise.entmail}}</td>
                <td>{{entreprise.entsiret}}</td>
                <td>{{entreprise.entstatut}}</td>
                <td>{{entreprise.contacts_id_contact}}</td>
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
        
    }),
    methods :{

        getEntreprise: function() {
        axios.get('https://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/entreprises').then((response) => {
        this.entreprises = response.data;
      });
  },
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
.btn-danger{
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
.btn-danger:after{
   content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  background: linear-gradient(to bottom, rgba(229, 172, 142, 0), rgba(255,255,255,0.5) 50%, rgba(229, 172, 142, 0));
  transform: rotateZ(60deg) translate(-5em, 7.5em);
   }
   .btn-danger:hover::after, .btn-danger:focus::after {
  animation: sheen 1s forwards;
}
@keyframes sheen {
  100% {
    transform: rotateZ(60deg) translate(1em, -9em);
  }
}

</style>