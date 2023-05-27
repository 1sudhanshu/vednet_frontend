import { H6 } from "../../../../AbstractElements";
import { InlineFormWithLabel, InlineFormWithoutLabel,} from "../../../../Constant";
import { CardBody } from "reactstrap";
import FormWithLabel from "./FormWithLabel";
import FormWithoutLabel from "./FormWithoutLabel";

const InlineFormCardBody = () => {
  return (
    <CardBody>
      <H6>{InlineFormWithLabel}</H6>
      <FormWithLabel />
      <H6>{InlineFormWithoutLabel}</H6>
      <FormWithoutLabel />
    </CardBody>
  );
};
export default InlineFormCardBody;
