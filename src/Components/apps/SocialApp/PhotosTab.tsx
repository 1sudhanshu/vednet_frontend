import { Col, Row, Card, CardBody } from "reactstrap";
import { photodescription, PortfolioTitle } from "../../../Constant";
import { H4,  P } from "../../../AbstractElements";
import { Gallery, Item } from "react-photoswipe-gallery";
import { photosTabData } from "../../../Data/apps/SocialApp";
import { Href } from "../../../Constant/index";

const PhotosTab = () => {
  return (
    <Row>
      <Col sm="12">
        <Card>
          <CardBody className="my-gallery row gallery-with-description">
            <Gallery>
              {photosTabData &&
                photosTabData.map((item, i) => (
                  <figure className="col-xl-3 col-sm-6 box-col-33" key={i}>
                    <Item
                      original={require(`../../../assets/images/${item}`)}
                      width="1024"
                      height="768"
                    >
                      {({ ref, open }) => (
                        <a href={Href} onClick={open}>
                          <img
                            className="img-thumbnail"
                            ref={ref as React.MutableRefObject<HTMLImageElement>}
                            src={require(`../../../assets/images/${item}`)}
                            alt=""
                          />
                          <div className="caption">
                            <H4>{PortfolioTitle}</H4>
                            <P>{photodescription}</P>
                          </div>
                        </a>
                      )}
                    </Item>
                  </figure>
                ))}
            </Gallery>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default PhotosTab;
