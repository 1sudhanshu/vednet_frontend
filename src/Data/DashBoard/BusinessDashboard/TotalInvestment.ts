import { ApexOptions } from 'apexcharts';
export const options5: ApexOptions = {
    chart: {
        height: 370,
        type: 'radialBar',
    },
    plotOptions: {
        radialBar: {
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
                }
            }
        }
    },
    responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                height: 270,
            }
        }
    }],
    colors: ["#158df7d9", '#51bb25', '#f04100', '#fd2e64',],
    series: [44, 55, 67, 83],
    labels: ['Daily', 'Weekly', 'Monthly', 'Yearly'],
}