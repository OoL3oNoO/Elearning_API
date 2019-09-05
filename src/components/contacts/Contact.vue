<template>
     <div class="col-md-12">
    <div class="table-responsive">
      <table class="table table-striped table-bordered" style="width:100%">
          <thead width="40rem">
              <tr>
                  <th class="align-middle" scope="col">Suppression,<br> modification</th>
                  <th class="align-middle" scope="col">#</th>
                  <th class="align-middle" scope="col" >Nom</th>
                  <th class="align-middle" scope="col" >Prénom</th>
                  <th class="align-middle" scope="col">Adresse</th>
                  <th class="align-middle" scope="col">Code postal</th>
                  <th class="align-middle" scope="col">Ville</th>
                  <th class="align-middle" scope="col" >Email</th>
                  <th class="align-middle" scope="col">Téléphone</th>
                  <th class="align-middle" scope="col">Fonction</th>
                  <th class="align-middle" scope="col">Entreprise</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(contact) in (contacts)" :key="contact.id_contact">
                <td class="align-middle"><button type="button" class="btn btn-light pull-right" data-toggle="modal" @click="deleteContact(contact.id_contact)">🗑</button>
                    <button type="button" class="btn btn-light pull-right" data-toggle="modal" @click="$router.push({name: 'UpdateContact' ,params: {id: `${contact.id_contact}`}})">🖍</button></td>
                <td class="align-middle">{{contact.id_contact}}</td>
                <td class="align-middle">{{contact.ctsurname}}</td>
                <td class="align-middle">{{contact.ctname}}</td>
                <td class="align-middle">{{contact.ctadress}}</td>
                <td class="align-middle">{{contact.ctzip}}</td>
                <td class="align-middle">{{contact.ctcity}}</td>
                <td class="align-middle">{{contact.ctemail}}</td>
                <td class="align-middle">{{contact.ctphone}}</td>
                <td class="align-middle">{{contact.ctfunction}}</td>
                <td class="align-middle">{{contact.entname}}</td>
              </tr>
          </tbody>
      </table>
    </div>
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