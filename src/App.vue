<template>
  <clients-list />
  <!-- <ul>
    <li v-for="name in clients" :key="name">
      <div>{{ name.Name }}</div>
      <div>{{ name.Ip }}</div>
      <div>{{ name.Date }}</div>
      <div v-if="name.Channels">
        <div v-for="channel in name.Channels" :key="channel">
          <div>{{ channel }}</div>
        </div>
      </div>
    </li>
  </ul> -->
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ClientsListComponent from "@/components/Clients/ClientsListComponent.vue";

export default defineComponent({
  name: "App",
  components: {
    "clients-list": ClientsListComponent,
  },
  setup() {
    const clients = ref();
    const getClients = async () => {
      try {
        const response = await fetch("http://localhost:8888/clients");
        const data = await response.json();
        clients.value = data;
      } catch (e) {
        console.log(e);
      }
      setTimeout(getClients, 4000);
    };
    getClients();
    return {
      clients,
    };
  },
});
</script>

<style>
body {
  background-color: #f7f8fc;
}
</style>
