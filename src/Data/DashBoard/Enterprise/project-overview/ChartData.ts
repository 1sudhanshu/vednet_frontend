import { ApexOptions } from "apexcharts";

export const areaSpaLineOptions: ApexOptions = {
  chart: {
    height: 300,
    type: 'area',
    toolbar: {
      show: false
    },
  },
  dataLabels: {
    enabled: false
  },
  grid: {
    borderColor: 'transparent',
    padding: {
      left: -10,
      right: 0,
      bottom: -15,
      top: -40
    }
  },
  stroke: {
    curve: 'smooth'
  },
  series: [{
    name: 'Task',
    data: [50, 45, 55, 50, 60, 56, 58, 50, 65, 60, 50, 60, 52, 55, 52]
  }],

  xaxis: {
    offsetX: 0,
    offsetY: 0,
    type: 'datetime',
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
    categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00", "2018-09-19T07:30:00", "2018-09-19T08:30:00", "2018-09-19T09:30:00", "2018-09-19T10:30:00", "2018-09-19T11:30:00", "2018-09-19T12:30:00", "2018-09-19T13:30:00", "2018-09-19T14:30:00"],
  },
  yaxis: {
    show: false,
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
  tooltip: {
    x: {
      format: 'dd/MM/yy HH:mm'
    },
  },
  colors: ["#0d6efd"],
  fill: {
    type: 'gradient',
    gradient: {
      shadeIntensity: 1,
      opacityFrom: 0.5,
      opacityTo: 0.4,
      stops: [0, 95, 100]
    }
  }
}


export const circleChartoptions: ApexOptions = {
  chart: {
    height: 310,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      startAngle: -135,
      endAngle: 135,  
      offsetY: 0,
      hollow: {
        size: '50%',
      },
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (w) {
              return "75"
          }
        }
      }
    }
  },
  fill: {
    colors: ["#0d6efd", '#148df6', '#51bb25'],
    type: 'gradient',
    gradient: {
      shade: 'light',
      type: 'horizontal',
      shadeIntensity: 0.2,
      inverseColors: true,
      opacityFrom: 1,
      opacityTo: 1,
      stops: [0, 100]
    }
  },
  legend: {
    show: true,
    position: 'top',
    horizontalAlign: 'left',
    floating: false,
    fontSize: '14px',
    offsetX: 0,
    offsetY: 0,
  },
  colors: ["#0d6efd", '#148df6', '#51bb25'],
  series: [60, 67, 100],
  labels: ['Completed', 'Assigned', 'Due'],
  stroke: {
    lineCap: "round",
  }
}