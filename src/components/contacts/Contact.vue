<template>
     <div class="col-md-12">
    <div class="table-responsive">
      <table class="table table-striped table-bordered" style="width:100%">
          <thead width="40rem">
              <tr>
                  <th scope="col">Suppression,<br> modification</th>
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
              <tr v-for="(contact) in (contacts)" :key="contact.id_contact">
                <button type="button" class="btn btn-danger pull-right" data-toggle="modal" @click="deleteContact(contact.id_contact)">🗑</button>
                <button type="button" class="btn btn-danger pull-right" data-toggle="modal" @click="$router.push({name: 'UpdateContact' ,params: {id: `${contact.id_contact}`}})">🖍</button>
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
    import axios from "axios";
    export default {
    name: "contact",
    props: {
    id: String,
    
    },
    data: ()=>({
        contacts:[],
        
    }),
    methods :{
        getContact: function() {
          axios.get('https://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/contacts').then((response) => {
            this.contacts = response.data;
          });
        },

        getOneContact: function() {
          axios.get(`https://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/contacts/${this.id}`).then((response) => {
            this.contacts = response.data;
          });  
        },

        deleteContact: function(id) { 
        let currentObj = this;
        axios.delete(`https://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/contacts/${id}`).then((response)=> 
        currentObj.$router.push("/listeContacts"));
      },
    },
    created() {
    this.getOneContact();
    },    
    watch: {
    $route: function() {
      this.getOneContact();
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