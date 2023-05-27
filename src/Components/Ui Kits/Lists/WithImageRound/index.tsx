import { Card, CardBody,  Col } from "reactstrap";
import WithImageRoundBody from "./WithImageRoundBody";
import HeadingCommon from "../../../../Common/HeadingCommon";

const WithImageRound = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading="With Images Rounded" />
        <CardBody>
          <WithImageRoundBody />
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithImageRound;
