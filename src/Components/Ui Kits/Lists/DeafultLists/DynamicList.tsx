import { LI } from "../../../../AbstractElements";
import { DeafultListData } from "../../../../Data/Components/UiKits/Lists";
import { Fragment } from "react";

const DynamicList = () => {
  return (
    <Fragment>
      {DeafultListData.map((data, index) => (
        <LI key={index}>{data}</LI>
      ))}
    </Fragment>
  );
};

export default DynamicList;
