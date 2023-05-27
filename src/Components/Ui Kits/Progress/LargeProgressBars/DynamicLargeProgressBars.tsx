import { Fragment } from "react";
import { ProgressBars } from "../../../../Data/Components/UiKits/progress";

const DynamicLargeProgressBars = () => {
  return (
    <Fragment>
      {ProgressBars.map((data, index) => (
        <div key={index} className="progress lg-progress-bar">
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

export default DynamicLargeProgressBars;
