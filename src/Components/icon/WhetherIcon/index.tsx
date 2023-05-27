import { Container, Row, Col, Card, CardBody } from "reactstrap";
import { whetherIconsWithAnimations } from "../../../Constant";
import { weatherIconData } from "../../../Data/icon/weatherIcon";
import HeadingCommon from '../../../Common/HeadingCommon';

const WhetherIconContainer = () => {
  return (
      <Container fluid={true}>
        <Row>
          <Col sm="12">
            <Card>
              <HeadingCommon H5ClassName="m-b-0" Heading={whetherIconsWithAnimations}  />
              <CardBody>
                <Row className="icon-lists whether-icon">
                  {weatherIconData.map((icon, i) => (
                    <Col lg="2" xs="4" key={i}>
                      {icon.icon}
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
  );
};

export default WhetherIconContainer;
