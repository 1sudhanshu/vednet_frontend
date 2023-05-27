import { Card, CardBody, Col } from "reactstrap";
import TransactionHistory from "./TransactionHistory";
import HeadingWithIcon from "../Common/HeadingWithIcon";
import TimeLineOne from "./TimeLineOne";
import TimeLineTwo from "./TimeLineTwo";
import TimeLineThree from "./TimeLineThree";

const RecentActivities = () => {
  return (
    <Col xl="4" className="xl-100 box-col-12">
      <Card className=" card-with-border overall-rating">
        <HeadingWithIcon Tittle="Recent Activities" />
        <CardBody className="pt-0">
          <div className="timeline-recent">
            <TimeLineOne />
            <TimeLineTwo />
            <TimeLineThree />
          </div>
        </CardBody>
      </Card>
      <TransactionHistory />
    </Col>
  );
};

export default RecentActivities;
