import { Fragment } from "react";
import { ProgressBarsStripedArr } from "../../../../Data/Components/UiKits/progress";

const DynamicProgressBarsStriped = () => {
  return (
    <Fragment>
      {ProgressBarsStripedArr.map((data, index) => (
        <div key={index} className="progress">
          <div
            className={`progress-bar progress-bar-striped ${data.className}`}
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

export default DynamicProgressBarsStriped;
