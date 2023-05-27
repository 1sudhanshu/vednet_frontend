import { Container, Row, Col, Card, CardBody } from "reactstrap";
import DateRangedata from "./DateRangedata";
import SingleDate from "./SingleDate";
import TimeAndDate from "./TimeAndDate";
import { DaterangePicker } from "../../../Constant";
import HeadingCommon from "../../../Common/HeadingCommon";

const DateRangerComponent = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col>
          <Card>
            <HeadingCommon Heading={DaterangePicker} />
            <CardBody>
              <Row className="date-range-picker">
                <DateRangedata />
                <SingleDate />
                <TimeAndDate />
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default DateRangerComponent;
