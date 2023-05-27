import { Label, Input } from "reactstrap";
import { FullColorCommonCardData } from "../../../../../Data/Forms/FormWidget/Select2";
import { OneValue } from "../../../../../Constant";
interface propsType {
  label: string;
  className: string;
}
const FullColorCommon = ({ label, className }: propsType) => {
  return (
    <div className="mb-2">
      <Label className="col-form-label">{label}</Label>
      <Input
        className={`form-control ${className} btn-square`}
        name="select"
        type="select"
      >
        <option value="opt1">{OneValue}</option>
        {FullColorCommonCardData.map((data, index) => (
          <option value={data.value} key={index}>{data.tittle}</option>
        ))}
      </Input>
    </div>
  );
};

export default FullColorCommon;
