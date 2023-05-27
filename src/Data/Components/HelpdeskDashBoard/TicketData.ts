 export const TicketDataOptions = {
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
          display: false,
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
          display: false,
        },
      },
    },
  };
  
  const labels = [
    "Q1",
    "Q2",
    "Q3",
    "Q4",
    "Q5",
    "Q6",
    "Q7",
    "Q8",
    "Q9",
    "Q10",
    "Q11",
    "Q12",
    "Q13",
    "Q14",
    "Q15",
    "Q16",
    "Q17",
    "Q18",
    "Q19",
    "Q20",
    "Q21",
    "Q22",
    "Q23",
  ];
  
  export const TicketDataDetails = {
    labels,
    datasets: [
      {
        barThickness: 5,
        label: "Dataset 1",
        data: [
          13.6, 11, 4, 8, 4, 15, 18, 10, 8, 10, 8, 4, 6, 11, 13.6, 11, 4, 8, 4,
          15, 18, 10, 8, 10, 8, 4, 6, 11, 13.6, 11, 4, 8, 4, 15, 18, 10, 18,
        ],
        backgroundColor: "rgba(101, 90, 243, 0.2)",
      },
    ],
  };