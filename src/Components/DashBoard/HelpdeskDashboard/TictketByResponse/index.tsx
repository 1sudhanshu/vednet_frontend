import { Card, Col } from "reactstrap";
import ResponseHeader from "./ResponseHeader";
import ResponseBody from "./ResponseBody";

const TictketByResponse = () => {
  return (
    <Col xl="4" className=" xl-100 box-col-12">
      <Card className=" card-with-border tickets o-hidden">
        <ResponseHeader />
        <ResponseBody />
      </Card>
    </Col>
  );
};
export default TictketByResponse;
