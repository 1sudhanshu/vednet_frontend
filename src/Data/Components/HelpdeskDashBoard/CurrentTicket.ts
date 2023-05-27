
export const CurrentTicketdata = {
    labels: [
      "0",
      "10",
      "20",
      "30",
      "40",
      "50",
      "60",
      "70",
      "80",
      "90",
      "100",
      "120",
      "130",
    ],
    datasets: [
      {
        barThickness: 20,
        label: "Dataset 1",
        data: [1, 5, 7, 6, -5, -6, -9, -6, 4, 5, 6, 5, 2],
        backgroundColor: "#e1dffd",
      },
      {
        barThickness: 20,
        label: "Dataset 2",
        data: [3, 2.6, 9, 3, -3, -4, -7, -4, 6, 8.5, 10, 3, 1],
        backgroundColor: "#655af3",
      },
    ],
  };

  export const CurrentTicketoptions = {
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
        grid: {
          display: true,
        },
        ticks: {
          display: false,
        },
      },
      x: {
        grid: {
          display: false,
        },
        ticks: {
          display: true,
        },
      },
    },
  };