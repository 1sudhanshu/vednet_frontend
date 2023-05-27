import { Status } from "../../../../../../Constant";
import { StatusCheckBoxData } from "../../../../../../Data/apps/Learning";
import { Label, Input } from 'reactstrap';

const StatusCheckBox = () => {
  return (
    <div className="checkbox-animated mt-0">
      <div className="learning-header">
        <span className="f-w-600">{Status}</span>
      </div>
      {StatusCheckBoxData.map((data, index) => (
        <Label key={index} className="d-block" htmlFor={`StatusCheckBox-${index}`}>
          <Input className="checkbox_animated" id={`StatusCheckBox-${index}`} type="checkbox" />
          {data}
        </Label>
      ))}
    </div>
  );
};

export default StatusCheckBox;
