import { Card, Col, Row } from "reactstrap";
import ComplaintHeader from "./ComplaintHeader";
import RecivedComplaint from "./RecivedComplaint";

const Complaint = () => {
  return (
    <Col xl="4" className=" xl-50 box-col-6">
      <Row>
        <Col sm="12">
          <Card className=" card-with-border resolve-complain">
            <ComplaintHeader />
          </Card>
        </Col>
        <RecivedComplaint />
      </Row>
    </Col>
  );
};

export default Complaint;
