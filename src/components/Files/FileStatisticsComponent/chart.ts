export const chart = {
  type: "line",
  data: {
    labels: ["dev", "front", "assets", "back", "general"],
    datasets: [
      {
        label: "files per channel",
        data: [5, 6, 9, 3, 1, 2],
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
