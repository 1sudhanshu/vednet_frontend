import { ApexOptions } from 'apexcharts';
export let TictketOptions1:ApexOptions = {
    chart: {
        height: 395,
        type: 'area',
        stacked: true,
        toolbar: {
            show: false
        },
    },
    colors: ['#f23c96', "#0d6efd"],
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
        curve: 'straight',
        width: [2]
    },
    series: [{
        name: 'South',
        data: [
            [1351202400000, 37.30],
            [1351338000000, 36.60],
            [1351424400000, 39.50],
            [1351710800000, 32.55],
            [1351870000000, 32.55],
            [1352056400000, 35.60],
            [1352342800000, 30.45],
            [1352629200000, 39.60],
            [1352815600000, 37.50],
            [1352924000000, 38.30],
            [1353061200000, 36.20],
            [1353134000000, 37.25],
            [1353220400000, 37.22],
            [1353479600000, 33.30],
            [1353566000000, 34.23],
            [1353632400000, 32.30],
            [1353757200000, 34.23],
            [1353857200000, 36.30],
            [1353957200000, 38.28],
            [1354021500000, 37.10],
            [1354175600000, 39.28],
            [1354362000000, 36.22],
            [1354548400000, 36.22],
            [1354634800000, 38.55],
            [1354794000000, 36.22],
            [1354980400000, 40.50],
            [1355166800000, 40.80],
            [1355253200000, 39.50],
            [1355439600000, 37.45],
            [1355698800000, 37.51],
            [1355885200000, 33.40],
            [1355985200000, 36.40],
            [1356085200000, 39.40],
        ]
    },
    {
        name: 'North',
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
        ]
    }
    ],
    fill: {
        type: 'gradient',
        gradient: {
            opacityFrom: 0.5,
            opacityTo: 0.2,
        }
    },
    legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'right'
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
    xaxis: {
        type: 'datetime',
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
}

export const apexComplain:ApexOptions = {
    chart: {
        height: 282,
        type: 'area',
        toolbar: {
            show: false
        },
    },
    dataLabels: {
        enabled: false
    },
    stroke: {
        curve: 'smooth'
    },
    series: [{
        name: 'series1',
        data: [50, 109, 42, 51, 28, 40, 31]
    }, {
        name: 'series2',
        data: [41, 52, 34, 32, 45, 32, 11]
    }],
    legend: {
        show: false,
    },
    colors: ["#0d6efd", '#fd2e64'],
    fill: {
        type: 'gradient',
        gradient: {
            shadeIntensity: 0.9,
            inverseColors: false,
            opacityFrom: 0.45,
            opacityTo: 0.40,
            stops: [20, 100, 100, 100]
          },
    },
    xaxis: {
        offsetX: 0,
        offsetY: 0,
        type: 'datetime',
        categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
        axisBorder: {
            offsetX: 0,
            show: false,
        },
        labels: {
            offsetX: 0,
            offsetY: 0,
            show: false,
        },
        axisTicks: {
            show: false,
        },
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
    tooltip: {
        x: {
            format: 'dd/MM/yy HH:mm'
        },
    }
}
