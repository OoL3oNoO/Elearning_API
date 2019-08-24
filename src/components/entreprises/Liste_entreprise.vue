<template>
  <div>
    <h1>"Voici la liste des entreprises partenaire de Trecobat"</h1>
 <DataTableEntreprise></DataTableEntreprise>
   </div>
  
</template>

<script>
import DataTableEntreprise from "../DataTableEntreprise";
export default {
  name: "Liste_entreprise",
  components :{ DataTableEntreprise },
  data: function() {
    return {
      
    };
  },

 

  methods: {
    //   created() {
    // },

    // //supprime une entreprise
    // deleteEntreprise: async function(identreprises) {
    //   let response = await fetch(
    //     `http://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/entreprises${this.id}`,
    //     { headers: this.headers, method: "DELETE" }
    //   );
    //   this.deleteEntreprise.result = await response.json();
    // },
    // //Update une entreprise
    // updateArtist: async function (id) {
    //   let response = await fetch(
    //     `http://app-91c920ca-654f-4549-a6f5-c58b7d4c0c06.cleverapps.io/v1/entreprises${this.id}`,
    //     {
    //       headers: this.headers,
    //       method: "POST",
    //       body: JSON.stringify({ name: this.updateEntrepriseData.name })
    //     }
    //   );
    //   this.updateEntrepriseData.result = await response.json();
    // }
  }
}
</script>
