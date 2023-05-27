import { Fragment } from "react";
import { LI } from "../../../../AbstractElements";
import { badgeWithPillData } from "../../../../Data/Components/UiKits/Lists";

const DynamicWithBadge = () => {
  return (
    <Fragment>
      {badgeWithPillData.map((data, index) => (
        <LI
          key={index}
          className="d-flex justify-content-between align-items-center"
        >
          {data.heading}
          <span className={`badge counter digits ${data.spanClassName}`}>
            {data.spanText}
          </span>
        </LI>
      ))}
    </Fragment>
  );
};

export default DynamicWithBadge;