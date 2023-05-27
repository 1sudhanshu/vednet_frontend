import { ApexOptions } from 'apexcharts';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
export let options1: ApexOptions = {
  chart: {
    type: "area",
    height: 120,
    toolbar: {
      show: false,
    },
  },
  dataLabels: {
    enabled: false,
  },
  series: [
    {
      data: [
        [1351202400000, 37.4],
        [1351638000000, 37.35],
        [1351724400000, 37.4],
        [1352256400000, 37.65],
        [1352342800000, 37.6],
        [1352429200000, 37.6],
        [1352515600000, 37.5],
        [1352624000000, 37.6],
        [1352761200000, 37.5],
        [1352834000000, 37.55],
        [1353220400000, 37.45],
        [1353466000000, 37.23],
        [1353632400000, 37.41],
        [1353757200000, 37.38],
        [1353857200000, 37.4],
        [1353957200000, 37.38],
        [1354021500000, 37.4],
        [1354175600000, 37.28],
        [1354262000000, 37.28],
        [1354748400000, 37.12],
        [1354834800000, 37.28],
        [1354894000000, 37.28],
        [1355080400000, 37.5],
        [1355166800000, 37.45],
        [1355353200000, 37.5],
        [1355439600000, 37.45],
        [1355698800000, 37.51],
      ],
    },
  ],
  grid: {
    borderColor: "transparent",
    padding: {
      left: -10,
      right: 0,
      bottom: -15,
      top: -58,
    },
  },
  xaxis: {
    type: "datetime",
    tickAmount: 6,
    offsetX: 0,
    offsetY: 0,
    labels: {
      offsetX: 0,
      show: false,
    },
    axisBorder: {
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      offsetX: 0,
      show: false,
    },
    axisBorder: {
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  stroke: {
    width: [2],
  },
  tooltip: {
    enabled: false,
  },
  colors: ["#ff5f24"],
};

export let options2: ApexOptions = {
  chart: {
    type: 'area',
    height: 120,
    toolbar: {
      show: false
    },
  },
  dataLabels: {
    enabled: false
  },
  series: [{
    data: [
      [1351202400000, 37.45],
      [1351438000000, 37.35],
      [1351724400000, 37.38],
      [1351856400000, 37.35],
      [1352042800000, 37.40],
      [1352129200000, 37.35],
      [1352315600000, 37.37],
      [1352424000000, 37.32],
      [1352561200000, 37.35],
      [1352734000000, 37.32],
      [1352920400000, 37.36],
      [1353066000000, 37.10],
      [1353232400000, 37.36],
      [1353457200000, 37.30],
      [1353857200000, 37.58],
      [1353925000000, 37.58],
      [1354021500000, 37.65],
      [1354175600000, 37.58],
      [1354262000000, 37.61],
      [1354348400000, 37.50],
      [1354834800000, 37.60],
      [1354894000000, 37.50],
      [1355080400000, 37.61],
      [1355666800000, 37.45],
      [1355953200000, 37.42],
      [1356039600000, 37.45],
      [1356198800000, 37.51],
      [1356298800000, 37.45],
      [1356398800000, 37.48],
      [1356498800000, 37.45],
      [1356898800000, 37.42],
    ]
  },

  ],
  markers: {
    size: 0,
  },
  grid: {
    borderColor: 'transparent',
    padding: {
      left: -10,
      right: 0,
      bottom: -15,
      top: -58
    }
  },
  xaxis: {
    type: 'datetime',
    tickAmount: 6,
    offsetX: 0,
    offsetY: 0,
    labels: {
      offsetX: 0,
      show: false,
    },
    axisBorder: {
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      offsetX: 0,
      show: false,
    },
    axisBorder: {
      offsetX: 0,
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  stroke: {
    width: [2]
  },
  tooltip: {
    enabled: false,
  },
  colors: ['#51bb25'],

}

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 5,
      bottom: 0,
      right: 5,
      top: 0,
    }
  },
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

const labels = ["0", "10", "20", "30", "40", "50", "60", "70"];

export const data = {
  labels,
  datasets: [
    {      maxBarThickness: 8 ,
      barThickness: 12,
      label: "Dataset 1",
      data: [4, 5, 5.3, 5, 5.8, 5, 6, 5.5],
      backgroundColor: "#655af3",
      borderRadius: Number.MAX_VALUE,
    },
    {      maxBarThickness: 8 ,
      barThickness: 12,
      label: "Dataset 2",
      data: [6.4, 7, 8, 7.5, 8.5, 7.8, 10, 9],
      backgroundColor: "rgba(101, 90, 243, 0.3)",
      borderRadius: Number.MAX_VALUE,
    },
    {
      maxBarThickness: 8 ,
      barThickness: 12,
      label: "Dataset 3",
      data: [3, 3.5, 3.2, 2, 3.8, 4, 5, 3.5],
      backgroundColor: "#63cf72",
      borderRadius: Number.MAX_VALUE,
    },
    {
      barThickness: 12,
      maxBarThickness: 8 ,
      label: "Dataset 4",
      data: [1.5, 2, 1.2, 0.5, 1.8, 4, 5, 0.5],
      backgroundColor: "#ff5f24",
      borderRadius: Number.MAX_VALUE,
    },
  ],
};