import { Card, CardBody, Col } from "reactstrap";
import { Alerts } from "../../../AbstractElements";
import { OutlineAlertData } from "../../../Data/Components/UiKits/Alert/OutlineAlert";
import HeadingCommon from "../../../Common/HeadingCommon";

const OutlineAlert = () => {
  const span = `Outline Archive just adding class <code>.outline</code>`;
  return (
    <Col sm="12" xl="6">
      <Card className=" height-equal">
        <HeadingCommon
          Heading="Outline Alerts"
          dangerouslySetInnerHTML={span}
        />
        <CardBody>
          <Alerts color="primary outline">This is a info alert—check it out!</Alerts>
          {OutlineAlertData.map((alert, index) => (
            <Alerts key={index} color={`${alert.color} outline`}>
              {alert.text}
            </Alerts>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default OutlineAlert;
