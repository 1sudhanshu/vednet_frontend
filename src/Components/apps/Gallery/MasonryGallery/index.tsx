import { Card, Col, Container, Row, CardBody } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { MasonryGallery } from "../../../../Constant";
import Masonry from 'react-masonry-css';
import { Image } from "../../../../AbstractElements";
import { masonryImageData } from "../../../../Data/apps/Gallery";

const MasonryGalleryContainer = () => {
  const styles = { width: '100%' };
  const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    700: 2,
    500: 1
  };

  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12" className="box-col-12">
          <Card>
            <HeadingCommon Heading={MasonryGallery} />
            <CardBody className="photoswipe-pb-responsive">
              <Row className="my-gallery  grid gallery">
              <Masonry breakpointCols={breakpointColumnsObj} className='my-gallery row grid gallery' columnClassName='col-md-3 col-sm-6 grid-item'>
                {masonryImageData.map((element, index) => (
                  <figure key={index}>
                    <Image src={require(`../../../../assets/images/${element.src}`)} style={styles} alt='' />
                  </figure>
                ))}
              </Masonry>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default MasonryGalleryContainer;
