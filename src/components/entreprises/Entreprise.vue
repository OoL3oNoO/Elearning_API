<template>
    <div><h1>Entreprise : <td>{{entreprise.entname}}</td></h1> 
                        <p>{{entreprise.entadress}}
                        {{entreprise.entzip}}
                        {{entreprise.entcity}}
                        {{entreprise.entphone}}
                        {{entreprise.entmail}}
                        {{entreprise.entsiret}}
                        {{entreprise.entstatut}}
                        {{entreprise.contacts_id_contact}}</p>
        
    </div>
</template>
<script>
    import axios from "axios";
    export default {
    name: "entreprise",
    data: ()=>({
        entreprises:[]
    }),

    created () {
    axios.get('http://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/entreprises').then(response => {
      this.entreprises = response.data;
                },)}
                
    }


</script>
