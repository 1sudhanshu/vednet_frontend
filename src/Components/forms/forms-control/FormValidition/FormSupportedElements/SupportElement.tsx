import { Form } from "reactstrap";
import CheckBoxElement from "./CheckBoxElement";
import RadioElement from "./RadioElement";
import SelectBoxElement from "./SelectBoxElement";
import FileElement from "./FileElement";

const SupportElement = () => {
  return (
    <Form className="was-validated">
      <div>
        <CheckBoxElement />
        <RadioElement />
        <SelectBoxElement />
        <FileElement />
      </div>
    </Form>
  );
};
export default SupportElement;
