import { Card, CardHeader, Col } from "reactstrap";
import { Btn, H5 } from "../../../../AbstractElements";
import RecivedComplaintBody from "./RecivedComplaintBody";

const RecivedComplaint = () => {
  return (
    <Col sm="12">
      <Card className=" card-with-border complaints o-hidden">
        <CardHeader className=" card-no-border d-flex">
          <H5>Complaints Received</H5>
          <Btn className="btn btn-outline-light" color="deafult">
            Last Week <i className="fa fa-caret-down" />
          </Btn>
        </CardHeader>
        <RecivedComplaintBody />
      </Card>
    </Col>
  );
};

export default RecivedComplaint;
