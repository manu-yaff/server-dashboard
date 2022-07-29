import { defineComponent, ref, onMounted } from "vue";
import FilesService from "@/api/services/files-service";
import { chart } from "@/components/Files/chart";
import Chart from "chart.js";
import { ChannelFiles, File } from "@/api/models/file";

export default defineComponent({
  name: "FilesListComponent",
  setup() {
    const filesResponse = ref();
    const totalFiles = ref();
    const totalData = ref();
    const files = ref();

    const fetchFiles = async () => {
      const result = await FilesService.getFiles();
      if (result) {
        filesResponse.value = result;
        totalFiles.value = result.TotalFiles;
        totalData.value = result.TotalData;
        files.value = result.FilesByChannel;
      }
    };

    fetchFiles();

    // onMounted(() => {
    //   const ct = document.getElementById("channels-chart") as HTMLCanvasElement;
    //   new Chart(ct, chart);
    // });

    return {
      filesResponse,
      totalFiles,
      totalData,
      files,
    };
  },
});
