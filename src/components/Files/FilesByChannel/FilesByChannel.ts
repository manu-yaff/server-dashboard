import { defineComponent, ref } from "vue";
import { FilesResponse } from "@/api/models/file";

export default defineComponent({
  name: "FilesByChannelComponent",
  props: {
    filesInfo: {
      type: Object as () => FilesResponse,
    },
  },
});
