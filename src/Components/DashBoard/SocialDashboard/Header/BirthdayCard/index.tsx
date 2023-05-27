import { Card,  Col } from "reactstrap";
import BirthdayCardBody from "./BirthdayCardBody";

const BirthdayCard = () => {
  return (
    <Col xl="4" className=" xl-40 box-col-5">
      <Card className=" card-with-border view-members birthday-card bg-primary o-hidden">
        <div className="birthday-bg" />
        <BirthdayCardBody />
      </Card>
    </Col>
  );
};

export default BirthdayCard;
