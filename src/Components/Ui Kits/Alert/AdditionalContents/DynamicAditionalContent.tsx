import { AditionalData } from "../../../../Data/Components/UiKits/Alert/AditionalContent";
import { Alerts, H4, P } from "../../../../AbstractElements";
import { Fragment } from "react";

const DynamicAditionalContent = () => {
  return (
    <Fragment>
      {AditionalData.map((color, index) => (
        <Alerts key={index} color={color.color}>
          <H4 className="alert-heading">Well done!</H4>
          <P>{color.paragraphOne}</P>
          <hr />
          <P className="mb-0">{color.paragraphTwo}</P>
        </Alerts>
      ))}
    </Fragment>
  );
};

export default DynamicAditionalContent;
