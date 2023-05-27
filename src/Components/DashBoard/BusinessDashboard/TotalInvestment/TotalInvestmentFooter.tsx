import React from "react";
import { CardFooter } from "reactstrap";
import { LI, UL } from "../../../../AbstractElements";
let datas = [
  { heading: "Total", amount: "$34,4562" },
  { heading: "Monthly", amount: "$12,463" },
  { heading: "Daily", amount: "$5000" },
];

const TotalInvestmentFooter = () => {
  return (
    <CardFooter className=" p-0">
      <UL className="flex-row simple-list">
        {datas.map((data, index) => (
          <LI className="text-center" key={index}>
            <span className="f-12">{data.heading}</span>
            <h6 className="f-w-600 mb-0">{data.amount}</h6>
          </LI>
        ))}
      </UL>
    </CardFooter>
  );
};

export default TotalInvestmentFooter;
