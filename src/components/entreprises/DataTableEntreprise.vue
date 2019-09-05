
<template>
  <div class="col-md-12">
    <div class="form-group">
      <input type="text" class="form-control" v-model="search" placeholder="Ici vous pouvez rechercher une entreprise par nom, code postal, ville, numéro de téléphone, email, siret, ou statut">
    </div>
    <div class="table-responsive">
      <table class="table table-striped table-bordered" style="width:100%">
          <thead width="40rem">
              <tr>
                  <th class="align-middle" scope="col">Suppression,modification, détail</th>
                  <th class="align-middle" scope="col">#</th>
                  <th class="align-middle" scope="col" >Nom</th>
                  <th class="align-middle" scope="col">Adresse</th>
                  <th class="align-middle" scope="col">Code postal</th>
                  <th class="align-middle" scope="col">Ville</th>
                  <th class="align-middle" scope="col">Téléphone</th>
                  <th class="align-middle" scope="col" >Email</th>
                  <th class="align-middle" scope="col">Siret</th>
                  <th class="align-middle" scope="col">Statut</th>
                  <th class="align-middle" scope="col">Contact</th>
              </tr>
          </thead>
          <tbody>
        
              <tr v-for="(entreprise) in (filteredList)" :key="entreprise.identreprises">
                <td class="align-middle"><button type="button" class="btn btn-light pull-right" style="" @click="deleteEntreprise(entreprise.identreprises)">🗑</button>
                  <button type="button" class="btn btn-light pull-right" @click="$router.push({name: 'UpdateEntreprise' ,params: {id: `${entreprise.identreprises}`}})">🖍</button>
                  <button type="button" class="btn btn-light pull-right"  @click="$router.push({name: 'Entreprise' ,params: {id: `${entreprise.identreprises}`}})">🔎</button> </td>
                <td class="align-middle">{{entreprise.identreprises}}</td>
                <td class="align-middle">{{entreprise.entname}}</td>
                <td class="align-middle">{{entreprise.entadress}}</td>
                <td class="align-middle">{{entreprise.entzip}}</td>
                <td class="align-middle">{{entreprise.entcity}}</td>
                <td class="align-middle">{{entreprise.entphone}}</td>
                <td class="align-middle">{{entreprise.entmail}}</td>
                <td class="align-middle">{{entreprise.entsiret}}</td>
                <td class="align-middle">{{entreprise.entstatut}}</td>
                <td class="align-middle">{{entreprise.ctsurname}}</td>
                
              </tr>
          </tbody>
      </table>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import axios from 'axios';
export default {
  name : "DataTableEntreprise",
  data: () => ({
    entreprises:[],
    contacts:[],
    search: '',
    searchSelection: '',
    pageSize: 100,
    currentPage: 1,
    
  }),
  methods:{

  getEntreprise: function() {
        axios.get('https://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/entreprises').then((response) => {
        this.entreprises = response.data;
      });
  },

  getContact: function() {
          axios.get('https://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/contacts').then((response) => {
            this.contacts = response.data;
          });
        },

  deleteEntreprise: function(id) { 
      axios.delete(`https://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/entreprises/${id}`).then((response)=> 
      this.getEntreprise());
    },
  },
  computed: {
    filteredList: function() {
      return this.entreprises.filter(entreprise => {
        
        let email = entreprise.entmail.toLowerCase().match(this.search.toLowerCase());
        let name = entreprise.entname.toLowerCase().match(this.search.toLowerCase());
        let statut = entreprise.entstatut.toLowerCase().match(this.search.toLowerCase());
        let city = entreprise.entcity.toLowerCase().match(this.search.toLowerCase());
        let phone = entreprise.entphone.toString().match(this.search);
        let zip = entreprise.entzip.toString().match(this.search);
        let siret = entreprise.entsiret.toString().match(this.search);
        return email || name || statut || phone || city || zip || siret;
      }).filter((row, index) => {
        let start = (this.currentPage-1)*this.pageSize;
        let end = this.currentPage*this.pageSize;
        if(index >= start && index < end) return true;
      });
    }
  },
  created () {
   this.getEntreprise();
   this.getContact();
  },
  
}
</script>

<style>
.btn-light{
margin-top: 0.25rem;
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