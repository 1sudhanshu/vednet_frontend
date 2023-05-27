import { Card, CardBody,Col } from "reactstrap";
import { Alerts} from "../../../AbstractElements";
import { LightAlertdata } from "../../../Data/Components/UiKits/Alert/LightAlert";
import HeadingCommon from "../../../Common/HeadingCommon";

const LightAlert = () => {
  const span = ` Alerts are available for any length of text, as well as an optional
   dismiss button.`;
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading="Light Alerts" dangerouslySetInnerHTML={span} />
        <CardBody>
          <Alerts color="primary">This is a info alert—check it out!</Alerts>
          {LightAlertdata.map((data, index) => (
            <Alerts key={index} color={data.color}>
              {data.text}
            </Alerts>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default LightAlert;
