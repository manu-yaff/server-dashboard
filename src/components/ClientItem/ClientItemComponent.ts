import { defineComponent } from "vue";
import { Client } from "@/api/models/client";

export default defineComponent({
  name: "clientItemComponent",
  props: {
    client: {
      type: Object as () => Client,
      required: true,
    },
  },
});
