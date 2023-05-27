import { Card, CardBody } from "reactstrap";
import { SupportedElements } from "../../../../../Constant";
import SupportElement from "./SupportElement";
import HeadingCommon from "../../../../../Common/HeadingCommon";

const FormSupportedElements = () => {
  const spanText ="Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you’ll see a slightly different style of feedback.</span><span>While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript."
  
  return (
    <Card>
      <HeadingCommon Heading={SupportedElements} span={true} dangerouslySetInnerHTML={spanText}/>
      <CardBody>
        <SupportElement />
      </CardBody>
    </Card>
  );
};

export default FormSupportedElements;
