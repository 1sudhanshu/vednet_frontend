import { Card, CardBody, CardHeader, Col, Alert } from "reactstrap";
import { useState } from "react";
import StaticAlertExample from "./StaticAlertExample";
import HeadingCommon from "../../../../Common/HeadingCommon";

const DismissingAlert = () => {
  let dismissAlertData = [
    { className: "alert-secondary" },
    { className: "alert-success" },
    { className: "alert-info" },
    { className: "alert-waning" },
    { className: "alert-danger" },
    { className: "alert-light" },
    { className: "alert-dark" },
  ];
  const [visible, setVisible] = useState(true);

  const onDismiss = () => setVisible(false);
  const span = `  To animate alerts when dismissing them, be sure to add the .fade and.show classes.`;
  return (
    <Col sm="12" xl="6">
      <Card>
        <CardHeader>
          <HeadingCommon Heading="Dismissing" dangerouslySetInnerHTML={span} />
        </CardHeader>
        <CardBody className="alert-bg">
          <StaticAlertExample />
          {dismissAlertData.map((data, index) => (
            <Alert key={index} isOpen={visible} toggle={onDismiss} className={`${data.className} dark alert-dismissible fade show    `} role="alert">
              <strong>Holy ! </strong> You can check in on some of those fields below.
            </Alert>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default DismissingAlert;
