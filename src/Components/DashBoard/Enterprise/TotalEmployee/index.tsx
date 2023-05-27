import { Card, CardBody, Col } from "reactstrap";
import EmployeeProgress from "./EmployeeProgress";
import TotalEmployeeCardBody from "./TotalEmployeeCardBody";

const TotalEmployee = () => {
  return (
    <Col xl="3" md="6" className=" xl-50  box-col-6">
      <Card className=" card-with-border">
        <CardBody>
          <TotalEmployeeCardBody />
          <EmployeeProgress />
        </CardBody>
      </Card>
    </Col>
  );
};

export default TotalEmployee;
