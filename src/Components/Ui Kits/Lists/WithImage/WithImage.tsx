import { Card, Col } from "reactstrap";
import WithImageBody from "./WithImageBody";
import HeadingCommon from "../../../../Common/HeadingCommon";


const WithImage = () => {
    return (
    <Col sm="12" xl="6">
      <Card>
      <HeadingCommon Heading="With Images" />
       <WithImageBody/>
      </Card>
    </Col>
  );
};

export default WithImage;
