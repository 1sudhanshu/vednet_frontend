import { LI } from "../../../../AbstractElements";
import { Fragment } from "react";
import { DyanmicWithIconsData } from "../../../../Data/Components/UiKits/Lists";

const DynamicWithIcons = () => {
  return (
    <Fragment>
      {DyanmicWithIconsData.map((data, index) => (
        <LI
          key={index}
          className={`list-group-item-action ${data.liClass && data.liClass}`}
          tag="a"
          href="#javascript"
        >
          {data.icon}{data.text}
        </LI>
      ))}
    </Fragment>
  );
};

export default DynamicWithIcons;