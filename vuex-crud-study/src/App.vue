<template>
  <v-app id="inspire">
    <app-nav></app-nav>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    'app-nav': () => import('@/views/layouts/AppNav.vue')
  },
  
};
</script>
<style>
</style>