import { Label } from "reactstrap";
import {DigitalProducts,NonDigitalProducts,TotalProducts,} from "../../../../Constant";

const TotalProductsBody = () => {
  let datas = [
    { label: DigitalProducts, Class: "bg-success", Width: 75 },
    { label: NonDigitalProducts, Class: "bg-info", Width: 25 },
    { label: TotalProducts, Class: "bg-warning", Width: 68 },
  ];
  return (
    <div className="employee-progress">
      {datas.map((data, index) => (
        <div className="value-total" key={index}>
          <Label>{data.label}</Label>
          <div className="progress-showcase">
            <div className="progress sm-progress-bar">
              <div
                className={`progress-bar ${data.Class}`}
                role="progressbar"
                style={{ width: `${data.Width}%` }}
                aria-valuenow={25}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TotalProductsBody;
