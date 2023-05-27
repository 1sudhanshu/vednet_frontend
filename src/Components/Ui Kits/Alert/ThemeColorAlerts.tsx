import { Card, CardBody, Col } from "reactstrap";
import { Alerts } from "../../../AbstractElements";
import { OutlineAlertData } from "../../../Data/Components/UiKits/Alert/OutlineAlert";
import HeadingCommon from "../../../Common/HeadingCommon";

const ThemeColorAlert = () => {
  const span = `Theme color Archive just adding class  <code>.dark</code>`;
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading="Theme Color Alerts" dangerouslySetInnerHTML={span}/>
        <CardBody>
          <Alerts color="primary dark">This is a light alert—check it out!</Alerts>
          {OutlineAlertData.map((alert, index) => (
            <Alerts key={index} color={`${alert.color} `}>
              {alert.text}
            </Alerts>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ThemeColorAlert;
