import { Label } from "reactstrap";
import Select from "react-select";
import { SelectFormOptions } from "../../../../Data/Forms/FormWidget/SelectTwo";

interface propsType {
  tittle: string;
  className?: string;
}

const MultiSelctBoxCommon = ({ tittle, className }: propsType) => {
  return (
    <div className="mb-2">
      <Label className="col-form-label">{tittle}</Label>
      <Select
        options={SelectFormOptions}
        className={className ? className : ""}
        isMulti
      />
    </div>
  );
};

export default MultiSelctBoxCommon;
