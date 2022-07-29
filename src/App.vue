<template>
  <div class="main-container">
    <h1>Dashboard Server</h1>
    <h2>Clients information</h2>
    <clients-list />
    <h2>Files information</h2>
    <files-component />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ClientsListComponent from "@/components/Clients/ClientsListComponent.vue";
import FilesComponent from "@/components/Files/FilesComponent/FilesComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    "clients-list": ClientsListComponent,
    "files-component": FilesComponent,
  },
});
</script>

<style>
body {
  background-color: #f7f8fc;
}
.main-container {
  padding: 1vw;
}
</style>
