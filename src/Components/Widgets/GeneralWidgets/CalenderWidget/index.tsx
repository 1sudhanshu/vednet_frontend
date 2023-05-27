import { Card, Col } from "reactstrap";
import { H5 } from "../../../../AbstractElements";
import CalDescription from "./CalDescription";

const CalenderWidget = () => {
  return (
    <Col sm="12" lg="6" xl="4" md="12" className=" xl-50  box-col-6">
      <Card className="height-equal">
        <div className="calender-widget">
          <div className="cal-img" />
          <div className="cal-date">
            <H5>
              25<br/>APRIL
            </H5>
          </div>
          <CalDescription />
        </div>
      </Card>
    </Col>
  );
};

export default CalenderWidget;
