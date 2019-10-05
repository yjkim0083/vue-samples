<template>
<v-row justify="center">
  <v-dialog v-model="this.$store.state.showModal" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="headline">Food Info</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field v-model="values.name" label="Dessert(100g sering)" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="values.calories" label="Calories" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="values.fat" label="Fat(g)" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="values.carbs" label="Carbs(g)" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="values.protein" label="Protein(g)" required></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field v-model="values.iron" label="Iron(%)" required></v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="blue darken-1" text @click="closeModal">Close</v-btn>
        <v-btn color="blue darken-1" text @click="saveForm">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</v-row>
</template>
<script>
export default {
  data() {
    return {
      values: {
        name: '',
        calories: '',
        fat: '',
        carbs: '',
        protein: '',
        iron: ''
      }
    }
  },
  methods: {
    closeModal() {
      this.$store.commit("toggleModal");
    },
    saveForm() {
      this.$store.commit("saveForm", this.values);

      this.$store.commit("toggleModal");
    }
  }
}
</script>
