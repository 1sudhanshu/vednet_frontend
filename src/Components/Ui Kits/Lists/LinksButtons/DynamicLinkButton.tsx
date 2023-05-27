import { LI } from "../../../../AbstractElements";
import { DynamicLinkButtonData } from "../../../../Data/Components/UiKits/Lists";
import { Fragment } from "react";

const DynamicLinkButton = () => {
  return (
    <Fragment>
      {DynamicLinkButtonData.map((data, index) => (
        <LI
          key={index}
          className="list-group-item-action"
          tag="a"
          href="#javascript"
          disabled={data.disabled && true}
        >
          {data.text}
        </LI>
      ))}
    </Fragment>
  );
};

export default DynamicLinkButton;
