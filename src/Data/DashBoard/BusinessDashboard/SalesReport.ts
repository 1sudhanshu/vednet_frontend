import { ActiveUser, TotalIncome, TotalTax, Totalsales } from "../../../Constant";

export let datas = [
  {
    cardBodyClassName: "mb-0",
    Heading: Totalsales,
    amount: "8162",
    firstLi: "85% goal reached",
    secondLi: "1,00,000",
    ProgressBarColor: "bg-primary",
  },
  {
    cardBodyClassName: "mb-0",
    Heading: TotalIncome,
    amount: "4,685",
    firstLi: "45% goal reached",
    secondLi: "1,00,000",
    ProgressBarColor: "bg-success",
  },
  {
    cardBodyClassName: "pt-0",
    Heading: ActiveUser,
    amount: "3,513",
    firstLi: "70% goal reached",
    secondLi: "1,00,000",
    ProgressBarColor: "bg-primary-light",
  },
  {
    cardBodyClassName: "pt-0",
    Heading: TotalTax,
    amount: "2,749",
    firstLi: "52% goal reached",
    secondLi: "1,00,000",
    ProgressBarColor: "sm-progress-bar",
  },
];
