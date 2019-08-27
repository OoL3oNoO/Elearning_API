
<template>
  <div class="col-md-12">
    <div class="form-group">
      <input type="text" class="form-control" v-model="search" placeholder="Ici vous pouvez rechercher une entreprise par nom, code postal, ville, numéro de téléphone, email, siret, ou statut">
    </div>
    <div class="table-responsive">
      <table class="table table-striped table-bordered " style="width:100% ">
          <thead width="40rem">
              <tr>
                  <th scope="col">Suppression,<br>modification, détail</th>
                  <th scope="col">#</th>
                  <th scope="col" >Nom</th>
                  <th scope="col">Adresse</th>
                  <th scope="col">Code postal</th>
                  <th scope="col">Ville</th>
                  <th scope="col">Téléphone</th>
                  <th scope="col" >Email</th>
                  <th scope="col">Siret</th>
                  <th scope="col">Statut</th>
                  <th scope="col">Contact</th>
              </tr>
          </thead>
          <tbody>
        
              <tr v-for="(entreprise) in (filteredList)" :key="entreprise.identreprises">
                <button type="button" class="btn btn-light pull-right" @click="deleteEntreprise(entreprise.identreprises)">🗑</button>
                                <button type="button" class="btn btn-light pull-right" @click="$router.push({name: 'UpdateEntreprise' ,params: {id: `${entreprise.identreprises}`}})">🖍</button>
                <button type="button" class="btn btn-light pull-right"  @click="$router.push({name: 'Entreprise' ,params: {id: `${entreprise.identreprises}`}})">🔎</button> 
                <td>{{entreprise.identreprises}}</td>
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
/*eslint-disable*/
import axios from 'axios';
export default {
  name : "DataTableEntreprise",
  data: () => ({
    entreprises:[],
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
  },
  
}
</script>

<style>
.btn-light{
margin-top: 0.25rem;
 /* background:rgb(247, 247, 247);
 border-color:#ffffff;
  color: #fff; */
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