import { defineComponent, ref, watch } from "vue";
import Chart from "chart.js";
import { ChannelFiles } from "@/api/models/file";
import { FilesResponse } from "@/api/models/file";

export default defineComponent({
  name: "FilesStatisticsComponent",
  props: {
    filesInfo: {
      type: Object as () => FilesResponse,
    },
  },
  setup(props) {
    const totalFiles = ref(props.filesInfo?.TotalFiles);
    const totalData = ref(props.filesInfo?.TotalData);
    const filesByChannel = ref(props.filesInfo?.FilesByChannel);
    const chart = ref();
    filesByChannel.value?.map((file) => {
      return {
        channel: file.Channel,
        filesNumber: file.NumberFiles,
      };
    });

    const formatForChart = (files: ChannelFiles[] | undefined) => {
      const labels: string[] = [];
      const data: number[] = [];
      if (files) {
        files.forEach((file) => {
          labels.push(file.Channel);
          data.push(file.NumberFiles);
        });
      }

      return {
        type: "line",
        data: {
          labels: labels,
          datasets: [
            {
              label: "files per channel",
              data: data,
              backgroundColor: "rgba(71, 183,132,.5)",
              borderColor: "#47b784",
              borderWidth: 3,
            },
          ],
        },
        options: {
          lineTension: 1,
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true,
                  padding: 25,
                },
              },
            ],
          },
        },
      };
    };

    watch(
      () => props.filesInfo?.FilesByChannel,
      (_, second) => {
        chart.value = formatForChart(second);
        const c = document.getElementById(
          "channels-chart"
        ) as HTMLCanvasElement;
        new Chart(c, chart.value);
      }
    );

    return {
      totalFiles,
      totalData,
      filesByChannel,
    };
  },
});
