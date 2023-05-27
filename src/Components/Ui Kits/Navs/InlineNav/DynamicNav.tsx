import { Fragment } from "react";
import { LI } from "../../../../AbstractElements";

const DynamicNav = () => {
  let tittle = [
    "State Color",
    "Typography",
    "Grid",
    "Tags & Pills",
    "Progress",
    "Model",
    "Alert",
  ];

  return (
    <Fragment>
      {tittle.map((data, index) => (
        <LI key={index} className="pl-navs-inline">
          <a href="#javascript">
            <i className="fa fa-angle-right"></i>
            <span> {data}</span>
          </a>
        </LI>
      ))}
    </Fragment>
  );
};

export default DynamicNav;
