import { Card, CardBody } from "reactstrap";
import { CustomStyles } from "../../../../../Constant";
import Custom from "./custom";
import HeadingCommon from "../../../../../Common/HeadingCommon";

const CustomForm = () => {
  const span1 = ` For custom Bootstrap form validation messages, you’ll need to add the <code className="text-danger">novalidate</code> boolean attribute toyour <code className="text-danger">&lt;form&gt;</code>. This disablesthe browser default feedback tooltips, but still provides access tothe form validation APIs in JavaScript. Try to submit the form below;our JavaScript will intercept the submit button and relay feedback toyou.`;
  const span2 =`  When attempting to submit, you’ll see the  <code className="text-danger">:invalid </code> and  <code className="text-danger">:valid </code> styles applied to  yourform controls.`
  return (
    <Card>
      <HeadingCommon Heading={CustomStyles}  span={true} dangerouslySetInnerHTML={span1}  dangerouslySetInnerHTML2={span2} span2={true}/>
      <CardBody>
        <Custom />
      </CardBody>
    </Card>
  );
};

export default CustomForm;
