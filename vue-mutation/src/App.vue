<template>
  <v-app>
    <v-container fluid>
        <v-btn class="primary" @click="openModal">Add</v-btn>
        <v-btn class="success">Edit</v-btn>
        <v-btn class="error" @click="removeData">Remove</v-btn>
        <data-table></data-table>
    </v-container>
    <form-modal></form-modal>
  </v-app>
</template>

<script>
import DataTable from '@/views/DataTable';
import FormModal from '@/views/FormModal';

export default {
  name: 'App',
  components: {
    DataTable,
    FormModal,
  },
  data: () => ({
    //
  }),
  methods: {
    openModal() {
      this.$store.commit("toggleModal");
    },
    removeData() {
      this.$store.commit("removeData");
    }
  }
};
</script>
