<template>
  <v-layout>
      <v-flex xs12>
        <v-card :elevation="2">
          <v-toolbar 
            dense 
            color="transparent" 
            :elevation="0">
            <v-toolbar-title><h5>Food Infomation</h5></v-toolbar-title>
            <div class="flex-grow-1"></div>
            <v-toolbar-items>
              <v-btn text class="primary--text font-weight-bold" @click="openModal()">
                <v-icon left>mdi-plus</v-icon> Add
              </v-btn>
              <v-btn text class="deep-orange--text text--darken-4 font-weight-bold">
                <v-icon left>mdi-border-color</v-icon> Edit
              </v-btn>
              <v-btn text class="error--text font-weight-bold">
                <v-icon left>mdi-minus</v-icon> Delete
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <v-divider></v-divider>
          <v-card-text class="pa-3">
            <v-data-table
            :headers="headers"
            :items="desserts"
            :items-per-page="5"
            class="elevation-0"
        ></v-data-table>
          </v-card-text>
        </v-card>
      </v-flex>
    <form-modal></form-modal>    
  </v-layout>
  
</template>

<script>
import { _headers, _desserts } from "@/api/food.js"
import FormModal from "@/views/FormModal.vue"

export default {
  components: {
    FormModal
  },
  data () {
    return {
      headers : _headers,
      desserts : _desserts
    }
  },
  methods: {
    openModal() {
      this.$store.commit('toggleModal');
    }
  },
  // computed: {
  //   showModal() {
  //     console.log('11111111111111');
  //     return this.$store.state.showModal;
  //   }
  // }
}
</script>

<style>

</style>