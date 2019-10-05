<template>
  <v-data-table
    v-model="selected"
    :headers="headers"
    :items="desserts"
    :single-select="singleSelect"
    item-key="name"
    show-select
    :items-per-page="5"
    class="elevation-1"
  >
  </v-data-table>
</template>
<script>
  export default {
    data () {
      return {
        singleSelect: true,
        selected: [],
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'left',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
        desserts: this.$store.state.dessert,
      }
    },
    watch: {
      selected: function(selected) {
        this.$store.commit('syncSelected', selected);
      }
    }
  }
</script>
