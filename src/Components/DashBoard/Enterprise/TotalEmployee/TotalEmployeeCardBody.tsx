import { Fragment } from "react";
import { H2, P } from "../../../../AbstractElements";
import { TotalEmployeeHeading } from "../../../../Constant";
import { iconDatas } from "../../../../Data/DashBoard/Enterprise/TotalEmployee";

const TotalEmployeeCardBody = () => {
  return (
    <div className="text-center">
      <H2 className="counter f-w-600">124</H2>
      <P>{TotalEmployeeHeading}</P>
      <div className="employees">
        {iconDatas.map((data, index) => (
          <Fragment key={index}>{data.icon}</Fragment>
        ))}
      </div>
    </div>
  );
};

export default TotalEmployeeCardBody;
