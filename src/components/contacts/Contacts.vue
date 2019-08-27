<template>
  <div>
    <h1>{{ msg }}</h1>
    <DataTableContact></DataTableContact>
  </div>
</template>
<script>
import DataTableContact from "../contacts/DataTableContact";
export default {
  name: "Contacts",
  components:{DataTableContact},
  data() {
    return {
      msg: "Contacts de l'entreprise"
    };
  }
};
</script>
