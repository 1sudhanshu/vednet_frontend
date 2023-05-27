import { Label } from "reactstrap";
import Select from "react-select";
import { Btn } from "../../../../AbstractElements";
import { Enable, Disable, EnableDisable } from "../../../../Constant/index";
import { useState } from "react";
import { SelectFormOptions } from "../../../../Data/Forms/FormWidget/SelectTwo";

const EnableDisableSelectBox = () => {
  const [enable, setEnable] = useState(false);

  return (
    <div className="mt-3">
      <Label className="col-form-label me-2">{EnableDisable}</Label>
      <Select isDisabled={enable} options={SelectFormOptions} />
      <Btn
        className="js-programmatic-enable mt-2 me-2"
        color="primary"
        onClick={() => setEnable(false)}
      >
        {Enable}
      </Btn>
      <Btn
        className="js-programmatic-disable mt-2"
        color="secondary"
        onClick={() => setEnable(true)}
      >
        {Disable}
      </Btn>
    </div>
  );
};

export default EnableDisableSelectBox;
