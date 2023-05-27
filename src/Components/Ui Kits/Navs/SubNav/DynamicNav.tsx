import React from "react";
import { LI, UL } from "../../../../AbstractElements";
import { subnavArr } from "../../../../Data/Components/UiKits/Navs";

const DynamicNav = () => {
  return (
    <UL className="icon-lists border navs-icon simple-list">
      {subnavArr.map((data, index) => (
        <LI key={index}>
          <a href="#javascript">
            {data.logo} <span> {data.tittle}</span>
          </a>
          {data?.children && (
            <UL className="simple-list">
              {data.children.map((data, index) => (
                <LI key={index} className="pl-navs-inline">
                  <a href="#javacripts">
                    <i className="fa fa-angle-right"></i>
                    {data}
                  </a>
                </LI>
              ))}
            </UL>
          )}
        </LI>
      ))}
    </UL>
  );
};

export default DynamicNav;
