import FileService from "@/api/services/files-service";
import { defineComponent, ref } from "vue";
import FileStatisticsComponent from "@/components/Files/FileStatisticsComponent/FileStatisticsComponent.vue";
import FilesByChannel from "@/components/Files/FilesByChannel/FilesByChannel.vue";

export default defineComponent({
  name: "FilesComponent",
  components: {
    statistics: FileStatisticsComponent,
    "files-by-channel": FilesByChannel,
  },
  setup() {
    const filesInfo = ref();
    const fetchFiles = async () => {
      const result = await FileService.getFiles();
      if (result) {
        filesInfo.value = result;
      }
      setTimeout(fetchFiles, 2000);
    };

    fetchFiles();

    return {
      filesInfo,
    };
  },
});
