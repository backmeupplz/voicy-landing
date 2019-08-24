<template lang="pug">
  v-app
    Navbar
    Snackbar
    v-content
      router-view
</template>

<script lang="ts">
import Snackbar from "./components/Snackbar.vue";
import Navbar from "./components/Navbar.vue";
import * as store from "./plugins/store";

export default {
  components: { Navbar, Snackbar }
};
</script>
