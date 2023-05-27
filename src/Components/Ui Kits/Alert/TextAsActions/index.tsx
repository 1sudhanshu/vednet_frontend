import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { TextAsActionsData } from "../../../../Data/Components/UiKits/Alert/TextAsActions";
import StaticAlertExample from "./StaticAlertExample";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { H5 } from "../../../../AbstractElements";
import CommonAlert from "../Common/CommonAlert";

const TextAsActions = () => {
  const span = `Use the <code>.alert-link</code> utility class to quickly provide matching colored links within any alert`;
  return (
    <Col sm="12" xl="6">
      <Card className="height-equal">
        <CardHeader>
          <H5>Text As Action</H5>
          <span></span>
        </CardHeader>
        <CardBody className="action-close">
          <StaticAlertExample />
          {TextAsActionsData.map((data) => (
            <CommonAlert key={data.id} item={data} btnText={true} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};
export default TextAsActions;
