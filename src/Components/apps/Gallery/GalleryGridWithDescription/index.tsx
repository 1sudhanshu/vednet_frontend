import { Card, CardBody, Col, Container, Row } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { GalleryGridWithDescription } from "../../../../Constant";
import GalleryImageDesc from "./GalleryImageDesc";

const GalleryGridWithDescriptionContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12">
          <Card>
            <HeadingCommon Heading={GalleryGridWithDescription} />
            <CardBody className="my-gallery row gallery-with-description">
              <GalleryImageDesc />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GalleryGridWithDescriptionContainer;
