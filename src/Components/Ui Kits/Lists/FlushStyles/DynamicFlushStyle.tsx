import React from "react";
import { Fragment } from "react";
import { LI } from "../../../../AbstractElements";
import { FlushStylesData } from "../../../../Data/Components/UiKits/Lists";

const DynamicFlushStyle = () => {
  return (
    <Fragment>
      {FlushStylesData.map((data, index) => (
        <LI key={index}>{data}</LI>
      ))}
    </Fragment>
  );
};

export default DynamicFlushStyle;
