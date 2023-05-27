import React, { Fragment } from "react";
import { H2, P } from "../../../../AbstractElements";
import { TotalProductsHead } from "../../../../Constant";
import { productIcons } from "../../../../Data/DashBoard/Enterprise/TotalEmployee";

const TotalProductsHeading = () => {
  return (
    <div className="text-center">
      <H2 className="counter f-w-600">47</H2>
      <P>{TotalProductsHead}</P>
      <div className="employees">
        {productIcons.map((data, index) => (
          <Fragment key={index}>{data.icon}</Fragment>
        ))}
      </div>
    </div>
  );
};

export default TotalProductsHeading;
