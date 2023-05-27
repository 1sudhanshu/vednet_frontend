export const ComplaintChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    scales: {
      y: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          display: false,
        },
      },
    },
  };
  
  export const ComplaintChartData = {
    labels: ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7"],
    datasets: [
      {
        barThickness: 3,
        label: "Dataset 1",
        data: [13.6, 11, 4, 8, 4, 15, 18, 10, 8, 10, 8, 4, 6, 11],
        backgroundColor: "#655af3",
      },
      {
        barThickness: 3,
        label: "Dataset 2",
        data: [4, 12, 14, 8, 13.6, 6, 8, 13.8, 11, 13.8, 11, 12, 14, 14],
        backgroundColor: "rgba(101, 90, 243, 0.35)",
      },
    ],
  };