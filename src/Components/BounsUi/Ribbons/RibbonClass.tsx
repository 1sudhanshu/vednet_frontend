import { Row, Col, CardBody, Card } from "reactstrap";
import { P, Ribbon } from "../../../AbstractElements";

const RibbonClass = () => {
  let number = [1, 2, 3];
  return (
    <CardBody className="ribbons-main">
      <Row>
        {number.map((data) => (
          <Col sm="12" md="6" lg="4" key={data}>
            <Card className="ribbon-wrapper">
              <CardBody>
                <Ribbon className="ribbon ribbon-primary ribbon-space-bottom">Ribbon</Ribbon>
                <P>Lorem Ipsum is simply dummy text of the printing andtypesetting industry. Lorem Ipsum has been the industry'sstandard dummy text.</P>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </CardBody>
  );
};

export default RibbonClass;
