import { Label } from "reactstrap";
import { Female, Male, TotalStaff } from "../../../../Constant/index";
const EmployeeProgress = () => {
  let datas = [
    { label: "Female (80%)", Class: "bg-primary", Width: 80 },
    { label: "Male (20%)", Class: "bg-danger", Width: 20 },
    { label: TotalStaff, Class: "bg-secondary", Width: 75 },
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
export default EmployeeProgress;
