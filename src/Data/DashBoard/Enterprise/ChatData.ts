import { ApexOptions } from "apexcharts";


export const sparklineData:ApexOptions = {
      chart: {
        type: 'area',
        height: 80,
        sparkline: {
          enabled: true
        },
      },
      stroke: {
        curve: 'straight'
      },
      colors: ['#fd2e64'],
      fill: {
        opacity: 0.3
      },
      series: [{
        data:[47, 45, 54, 38, 56, 24, 65, 31, 37, 39, 62, 51, 35, 41, 35, 27, 93, 53, 61, 27, 54, 43, 19, 46]
      }],
      xaxis: {
        crosshairs: {
          width: 1
        },
      },
      yaxis: {
        min: 0
      }
    }

     export const Apexmonthlyoptions:ApexOptions = {
        chart: {
        type: 'bar',
        height: 192,
        sparkline: {
          enabled: true
        }
        },
        plotOptions: {
        bar: {
          columnWidth: '50%'
        }
        },
        series: [{
        data: [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54, 25, 66, 41, 89, 63, 25, 89, 66]
        }],
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19"],
        colors: ['#fd2e64'],
        xaxis: {
        crosshairs: {
          width: 1
        },
        },
        tooltip: {
        fixed: {
          enabled: false
        },
        x: {
          show: false
        },
        y: {
          title: {
            formatter: function (seriesName) {
              return ''
            }
          }
        },
        marker: {
          show: false
        }
        }
        }