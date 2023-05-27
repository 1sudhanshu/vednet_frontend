import { Col } from "reactstrap";
import { number } from "../../../../Data/Components/UiKits/progress";

const DynamicMultipleBars = () => {
  return (
    <Col>
      {number.map((num) => (
        <div key={num.main} className="progress">
          {num.Children &&
            num.Children.map((data, index) => (
              <div
                key={index}
                className={`progress-bar ${data.className}`}
                role="progressbar"
                style={{ width: `${data.width}%` }}
                aria-valuenow={data.value}
                aria-valuemin={0}
                aria-valuemax={100}
              ></div>
            ))}
        </div>
      ))}
    </Col>
  );
};

export default DynamicMultipleBars;
