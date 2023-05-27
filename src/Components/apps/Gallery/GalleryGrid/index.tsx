import React from "react";
import { Card, Col, Container, Row, CardBody } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { ImageGallery } from "../../../../Constant";
import GalleryImages from "./GalleryImages";

const GalleryGridContainer = () => {

  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12">
          <Card>
            <HeadingCommon Heading={ImageGallery} />
            <CardBody className="gallery my-gallery row">
              <GalleryImages/>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default GalleryGridContainer;
