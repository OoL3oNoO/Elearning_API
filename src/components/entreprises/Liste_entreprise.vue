<template>
  <div>
    <h1>Voici la liste des entreprises partenaire de Trecobat</h1>
 <DataTableEntreprise></DataTableEntreprise>
   </div>
  
</template>

<script>
import DataTableEntreprise from "../entreprises/DataTableEntreprise";
export default {
  name: "Liste_entreprise",
  components :{ DataTableEntreprise },
  data: function() {
    return {
      
    };
  },

 

  methods: {

  }
}
</script>
