import { Btn } from "../../../../../AbstractElements";
import { SubmitForm } from "../../../../../Constant";
import { Form } from "reactstrap";
import BrowserDefaultFormRow1 from "./BrowserDefaultFormRow1";
import BrowserDefaultFormRow2 from "./BrowserDefaultFormRow2";
import BrowserDefaultFormGroup from "./BrowserDefaultFormGroup";

const BrowserDefault = () => {
  return (
    <Form>
      <BrowserDefaultFormRow1 />
      <BrowserDefaultFormRow2 />
      <BrowserDefaultFormGroup />
      <Btn color="primary">{SubmitForm}</Btn>
    </Form>
  );
};
export default BrowserDefault;
