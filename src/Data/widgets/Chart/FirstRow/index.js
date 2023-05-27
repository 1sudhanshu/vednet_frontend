import { Products, Projects, Sale } from "../../../../Constant";
import {
  optionslinechart,
  optionslinechart2,
  optionslinechart3,
} from "../ChartData";

export let FirstRowDatas = [
  {
    heading: Sale,
    number: 90,
    icon: <i className="icon-angle-up f-12 ms-1" />,
    amount: 3654,
    subAmount: ".00",
    option: optionslinechart,
    series: optionslinechart.series,
    id: "chart-widget1",
  },
  {
    heading: Projects,
    number: 30,
    icon: <i className="icon-angle-up f-12 ms-1" />,
    amount: 12569,
    option: optionslinechart2,
    series: optionslinechart2.series,
    id: "chart-widget-top-second",
  },
  {
    heading: Products,
    number: 68,
    icon: <i className="icon-angle-up f-12 ms-1" />,
    amount: 930,
    subAmount: "M",
    option: optionslinechart3,
    series: optionslinechart3.series,
    id: "chart-widget-top-third",
  },
];
