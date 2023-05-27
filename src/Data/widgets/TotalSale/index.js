import {ArrowDown,ArrowUp,DollarSign,Layers,ShoppingBag,ShoppingCart,} from "react-feather";
import {Cancel,Done,Month,New,Sale,Today,Week,Year} from "../../../Constant";

export let TotalSaleDatas = [
  {
    colClass: "pe-0",
    divClass: "d-flex border-after-xs",
    tittle: Sale,
    subTittle: Today,
    icon: <ArrowDown className="font-primary" />,
    amount: 25698,
    subAmount: "-$2658(36%)",
  },
  {
    colClass: "ps-0",
    divClass: "d-flex ",
    tittle: Sale,
    subTittle: Month,
    icon: <ArrowUp className="font-primary" />,
    amount: 6954,
    subAmount: "+$369(15%)",
  },
  {
    colClass: "pe-0",
    divClass: "d-flex border-after-xs",
    tittle: Sale,
    subTittle: Week,
    icon: <ArrowUp className="font-primary" />,
    amount: 63147,
    subAmount: "+$69(65%)",
  },
  {
    colClass: "ps-0",
    divClass: "d-flex ",
    tittle: Sale,
    subTittle: Year,
    icon: <ArrowUp className="font-primary" />,
    secondDiv: "ps-3",
    amount: 963198,
    subAmount: "+$3654(90%)",
  },
];

export let TotalSaleRowData = [
  {
    colClass: "pe-0",
    divClass: "d-flex border-after-xs",
    number: 68,
    NumberIcon: <i className="fa fa-angle-up ms-2" />,
    tittle: New,
    icon: <ShoppingBag className="font-primary float-start ms-2" />,
    amount: 6981,
  },
  {
    colClass: "ps-0",
    divClass: "d-flex ",
    number: 12,
    NumberIcon: <i className="fa fa-angle-down ms-2" />,
    tittle: 'Pending',
    icon: <Layers className="font-primary float-start ms-3" />,
    amount: 783,
  },
  {
    colClass: "pe-0",
    divClass: "d-flex border-after-xs",
    number: 68,
    NumberIcon: <i className="fa fa-angle-up ms-2" />,
    tittle: Done,
    icon: <ShoppingCart className="font-primary float-start ms-2" />,
    amount: 3674,
    SecondDiv: "pt-0",
  },
  {
    colClass: "ps-0",
    divClass: "d-flex ",
    number: 68,
    NumberIcon: <i className="fa fa-angle-up ms-2" />,
    tittle: Cancel,
    icon: <DollarSign className="font-primary float-start ms-2" />,
    amount: 69,
    SecondDiv: "pt-0",
  },
];
