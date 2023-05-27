import { Card, CardBody, Col } from "reactstrap";
import { Alerts } from "../../../AbstractElements";
import { DarkOutlineAlertdata } from "../../../Data/Components/UiKits/Alert/DarkOutlineAlert";
import HeadingCommon from "../../../Common/HeadingCommon";

const DarkOutlineAlert = () => {
  const span = `Outline Archive just adding class <code>.outline-2x</code>`;
  return (
    <Col sm="12" xl="6">
      <Card className=" height-equal">
        <HeadingCommon Heading="Outline Dark Alerts" dangerouslySetInnerHTML={span}/>
        <CardBody>
          <Alerts color="primary outline-2x">This is a primary alert—check it out!</Alerts>
          {DarkOutlineAlertdata.map((alert, index) => (
              <Alerts key={index} color={`${alert.color} outline-2x`}>{alert.text}</Alerts>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default DarkOutlineAlert;