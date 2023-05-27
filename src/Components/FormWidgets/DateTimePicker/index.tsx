import { Card, CardBody,Container, Row } from "reactstrap";
import { Col } from "react-bootstrap";
import DateTimeForm from "./DateTimeForm";
import HeadingCommon from "../../../Common/HeadingCommon";
import { DateTimePicker } from "../../../Constant";

const DateTimerComponent = () => {
  return (
    <Container fluid={true}>
      <Card>
        <HeadingCommon Heading={DateTimePicker} />
        <CardBody>
          <Row>
            <Col md="12">
              <div className="datetime-picker">
                <DateTimeForm />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default DateTimerComponent;