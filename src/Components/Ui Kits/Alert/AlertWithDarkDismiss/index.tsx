import { Card, CardBody, Col } from "reactstrap";
import { AlertData } from "../../../../Data/Components/UiKits/Alert/AlertWithDarkDismiss";
import HeadingCommon from "../../../../Common/HeadingCommon";
import StaticAlert from "./StaticAlert";
import CommonAlert from "../Common/CommonAlert";

const AlertWithDarkDismiss = () => {
  const span = `To animate alerts when dismissing them, be sure to add the .fade
and.show classes.`;
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal">
        <HeadingCommon Heading="Dismissing" dangerouslySetInnerHTML={span} />
        <CardBody className="alert-bg">
          <StaticAlert />
          {AlertData.map((data, i) => (
            <CommonAlert key={i} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default AlertWithDarkDismiss;
