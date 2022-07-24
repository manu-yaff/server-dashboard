import { defineComponent, ref } from "vue";
import CardComponent from "../Card/CardComponent.vue";
import ClientItemComponent from "../ClientItem/ClientItemComponent.vue";
import ClientService from "@/api/services/client-service";

export default defineComponent({
  name: "ClientsListComponent",
  components: {
    CardComponent,
    "client-item": ClientItemComponent,
  },
  setup() {
    const clients = ref();
    const fetchClients = async () => {
      clients.value = await ClientService.getClients();
      setTimeout(fetchClients, 2000);
    };

    fetchClients();

    const clientTableColumns = ref([
      "Client",
      "Ip address",
      "Conn date",
      "Channels",
    ]);

    return {
      clientTableColumns,
      clients,
    };
  },
});
