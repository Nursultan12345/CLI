<template>
  <div>
    <v-app>
      <v-main>
        <!-- Provides the application the proper gutter -->

        <v-container fluid>
          <!-- If using vue-router -->

          <router-view></router-view>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>
<script>
export default {
  name: "MainSite",
};
</script>
<style scoped>
</style>
