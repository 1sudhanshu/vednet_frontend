import { Card, CardBody, Col, Container, Row } from "reactstrap";
import DatePickersData from "./DatePicker";
import { DatePickers } from "../../../Constant";
import HeadingCommon from "../../../Common/HeadingCommon";

const DatePickerComponent = () => {
  return (
    <Container fluid={true}>
      <Card>
        <HeadingCommon Heading={DatePickers} />
        <CardBody>
          <Row>
            <Col md="12">
              <div className="date-picker">
                <DatePickersData />
              </div>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Container>
  );
};

export default DatePickerComponent;
