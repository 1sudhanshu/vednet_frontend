import { Fragment } from "react";
import { CustomHeightProgressBarsarr } from "../../../../Data/Components/UiKits/progress";

const DynamicCustomHeightProgressBars = () => {
  return (
    <Fragment>
      {CustomHeightProgressBarsarr.map((data, index) => (
        <div
          key={index}
          className={`progress`}
          style={{ height: `${data.style}px` }}
        >
          <div
            className={`progress-bar ${data.className}`}
            role="progressbar"
            style={{ width: `${data.ariaValuenow}%` }}
            aria-valuenow={data.ariaValuenow}
            aria-valuemin={0}
            aria-valuemax={100}
          ></div>
        </div>
      ))}
    </Fragment>
  );
};

export default DynamicCustomHeightProgressBars;
