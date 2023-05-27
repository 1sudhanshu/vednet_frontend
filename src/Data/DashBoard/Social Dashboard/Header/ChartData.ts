import { ApexOptions } from 'apexcharts';
export const socialChartOptions: ApexOptions = {
    chart: {
        height: 244,
        type: 'area',
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'straight'
    },
    xaxis: {
        offsetX: 0,
        offsetY: 0,
        type: 'datetime',
        categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00", "2018-09-19T07:30:00", "2018-09-19T08:30:00", "2018-09-19T09:30:00", "2018-09-19T10:30:00", "2018-09-19T11:30:00", "2018-09-19T12:30:00", "2018-09-19T13:30:00"],
        labels: {
            offsetX: 0,
            show: false,
        },
        axisBorder: {
            offsetX: 0,
            show: false,
        },
    },
    yaxis: {
        show: false,
    },
    grid: {
        show: false,
        padding: {
            top: -30,
            left: 0,
            right: 0
        }
    },
    markers: {
        size: 6,
        strokeColors: '#51bb25',
        strokeWidth: 3,
        colors: ['#ffffff'],
        hover: {
            size: 7,
            sizeOffset: 3
        },
    },
    series: [{
        name: 'Likes',
        data: [15, 15, 18, 15, 16, 16, 18, 17, 17, 19, 16, 15, 16, 16]
    }],
    colors: ['#51bb25'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.6,
            opacityTo: 0.4,
            stops: [0, 98, 100]
        }
    },
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm',
        },
    }
}