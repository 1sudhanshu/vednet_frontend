import { BasicProgressBars } from "../../../../Data/Components/UiKits/progress";
import { Fragment } from "react";

const DynamicBasicProgressCard = () => {
  return (
    <Fragment>
      {BasicProgressBars.map((data, index) => (
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

export default DynamicBasicProgressCard;
