const labels = [
  "01 June",
  "02 June",
  "03 June",
  "04 June",
  "05 June",
  "06 June",
  "07 June",
];
const data = {
  labels: labels,
  datasets: [
    {
      label: "Sales",
      backgroundColor: "white",
      borderColor: "#0f9f6e",
      data: [0, 400, 800, 1200, 1600, 2000, 2400],
    },
  ],
};

const configLineChart = {
  type: "line",
  data,
  options: {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.dataset.label || "";

            if (label) {
              label += ": ";
            }
            if (context.parsed.y !== null) {
              label += new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
              }).format(context.parsed.y);
            }
            return label;
          },
        },
      },
    },
  },
};

var chartLine = new Chart(
  document.getElementById("chartLine"),
  configLineChart
);
