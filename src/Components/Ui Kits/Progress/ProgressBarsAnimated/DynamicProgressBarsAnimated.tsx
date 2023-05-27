import { Fragment } from "react";
import { ProgressBarsStripedArr } from "../../../../Data/Components/UiKits/progress";

const DynamicProgressBarsAnimated = () => {
  return (
    <Fragment>
      {ProgressBarsStripedArr.map((data, index) => (
        <div className="progress" key={index}>
          <div
            className={`progress-bar-animated progress-bar-striped ${data.className}`}
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

export default DynamicProgressBarsAnimated;
