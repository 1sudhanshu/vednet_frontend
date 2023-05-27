import { Card, CardBody, Col } from "reactstrap";
import CommonAlert from "../Common/CommonAlert";
import { AlertWithLightDismissData } from "../../../../Data/Components/UiKits/Alert/AlertWithLightDismiss";
import HeadingCommon from "../../../../Common/HeadingCommon";
import AlertWithLightDismissStatic from "./AlertWithLightDismissStatic";

const AlertWithLightDismiss = () => {
  const span = `To animate alerts when dismissing them, be sure to add the .fade and
  .show classes.`;
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal">
        <HeadingCommon Heading="Dismissing" dangerouslySetInnerHTML={span} />
        <CardBody className="alert-bg">
          <AlertWithLightDismissStatic />
          {AlertWithLightDismissData.map((data) => (
            <CommonAlert key={data.id} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default AlertWithLightDismiss;
