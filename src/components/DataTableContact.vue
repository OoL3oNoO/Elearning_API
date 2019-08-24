
<template>
  <div class="col-md-12">
    <div class="form-group">
      <input type="text" class="form-control" v-model="search" placeholder="Ici vous pouvez rechercher une contact par nom, prénom, code postal, ville, numéro de téléphone, email, ou fonction">
    </div>
    <div class="table-responsive">
      <table class="table table-striped table-bordered" style="width:100%">
          <thead width="40rem">
              <tr>
                  <th scope="col">Suppression, Edition,<br>détails</th>
                  <th scope="col">#</th>
                  <th scope="col" >Nom</th>
                  <th scope="col" >Prénom</th>
                  <th scope="col">Adresse</th>
                  <th scope="col">Code postal</th>
                  <th scope="col">Ville</th>
                  <th scope="col" >Email</th>
                  <th scope="col">Téléphone</th>
                  <th scope="col">Fonction</th>
                  <th scope="col">Entreprise</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(contact) in (filteredList)" :key="contact.id_contact">
                <button type="button" class="btn btn-danger pull-right" data-toggle="modal" @click="deleteContact(contact.id_contact)">🗑</button>
                <button type="button" class="btn btn-danger pull-right" data-toggle="modal" @click="(index)">🖍</button>
                <a type="button" href="http://localhost:8080/#/entreprise/{id}" class="btn btn-danger pull-right" data-toggle="modal" @click="(index)">🔎</a>
                <td>{{contact.id_contact}}</td>
                <td>{{contact.ctsurname}}</td>
                <td>{{contact.ctname}}</td>
                <td>{{contact.ctadress}}</td>
                <td>{{contact.ctzip}}</td>
                <td>{{contact.ctcity}}</td>
                <td>{{contact.ctemail}}</td>
                <td>{{contact.ctphone}}</td>
                <td>{{contact.ctfunction}}</td>
                <td>{{contact.entreprises_identreprises}}</td>
              </tr>
          </tbody>
      </table>
    </div>
 <!-- <button @click="prevPage" class="float-left btn btn-outline-info btn-sm"><i class="fas fa-arrow-left"></i> Previous</button> 
 <button @click="nextPage" class="float-right btn btn-outline-info btn-sm">Next <i class="fas fa-arrow-right"></i></button> -->
  </div>
</template>

<script>
/*eslint-disable*/
import axios from 'axios';
export default {
  data: () => ({
    contacts:[],
    search: '',
    searchSelection: '',
    pageSize: 100,
    currentPage: 1
  }),
  methods:{
     getContact: function() {
        axios.get('http://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/contacts').then((response) => {
        this.contacts = response.data;
      });
  },
      deleteContact: function(id) { 
      axios.delete(`http://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/contacts/${id}`).then((response)=> 
      this.getContact());
    },
  },
  
  computed: {
    filteredList: function() {
      return this.contacts.filter(contact => {
        let email = contact.ctemail.toLowerCase().match(this.search.toLowerCase());
        let name = contact.ctname.toLowerCase().match(this.search.toLowerCase());
        let surname = contact.ctsurname.toLowerCase().match(this.search.toLowerCase());
        let fonction = contact.ctfunction.toLowerCase().match(this.search.toLowerCase());
        let city = contact.ctcity.toLowerCase().match(this.search.toLowerCase());
        let phone = contact.ctphone.toString().match(this.search);
        let zip = contact.ctzip.toString().match(this.search);
      
        return email || name || surname || fonction || phone || city || zip;
      }).filter((row, index) => {
        let start = (this.currentPage-1)*this.pageSize;
        let end = this.currentPage*this.pageSize;
        if(index >= start && index < end) return true;
      });
    }
  },
  created () {
   this.getContact()
  }
}
</script>

<style cop>
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