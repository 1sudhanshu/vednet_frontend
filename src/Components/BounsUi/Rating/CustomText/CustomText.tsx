import { Col, Card, CardHeader } from "reactstrap";
import CustomTextBody from "./CustomTextBody";
import { H5 } from "../../../../AbstractElements";

const CustomText = () => {
  return (
    <Col xl="6" lg="12">
      <Card>
        <CardHeader>
          <H5>Star Rating</H5>
        </CardHeader>
        <CustomTextBody />
      </Card>
    </Col>
  );
};

export default CustomText;
