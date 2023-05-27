import { Card, CardBody, Col } from "reactstrap";
import { dataWithIcon } from "../../../../Data/Components/UiKits/Alert/AlertWithIcons";
import HeadingCommon from "../../../../Common/HeadingCommon";
import CommonAlert from "../Common/CommonAlert";
import StaticAlertExample from "./StaticAlertExample";

const AlertWithIcons = () => {
  const span = `Just add Any icon before text`;
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal">
        <HeadingCommon
          Heading="Alert With Icon"
          dangerouslySetInnerHTML={span}
        />
        <CardBody className="alert-bg ">
          <StaticAlertExample />
          {dataWithIcon.map((data) => (
            <CommonAlert key={data.id} item={data} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default AlertWithIcons;
