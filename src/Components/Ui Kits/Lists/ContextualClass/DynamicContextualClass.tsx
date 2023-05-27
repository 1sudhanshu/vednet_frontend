import { Fragment } from "react";
import { LI } from "../../../../AbstractElements";
import { ContextualClassData } from "../../../../Data/Components/UiKits/Lists";

const DynamicContextualClass = () => {
  return (
    <Fragment>
      {ContextualClassData.map((data, index) => (
        <LI key={index} className={data.className}>
          {data.text}
        </LI>
      ))}
    </Fragment>
  );
};

export default DynamicContextualClass;
