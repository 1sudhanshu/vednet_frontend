import { Fragment } from "react";
import { ProgressBarsStatesarr } from "../../../../Data/Components/UiKits/progress";

const CustomProgressBarsStates = () => {
  return (
    <Fragment>
      {ProgressBarsStatesarr.map((data, index) => (
        <div className="progress" key={index}>
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

export default CustomProgressBarsStates;
