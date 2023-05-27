import { Card, Col, Row, CardBody } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Href } from "../../../../Constant";

const ImageHoverEffectsContainer = () => {
  let datas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const imageList = ["lightgallry/08.jpg","lightgallry/09.jpg","lightgallry/010.jpg","lightgallry/011.jpg",];

  return (
    <>
      {datas.map((data, index) => (
        <Row key={index}>
          <Col sm="12">
            <Card>
              <HeadingCommon Heading={`hove effect ${data}`} />
              <CardBody>
                <Row className="my-gallery gallery">
                  <Gallery>
                    {imageList &&
                      imageList.map((item, i) => (
                        <figure className={`col-md-3 col-6 img-hover hover-${data}`} key={i}>
                          <Item original={require(`../../../../assets/images/${item}`)} width="1024" height="768">
                            {({ ref, open }) => (
                              <a href={Href} onClick={open}>
                                <div>
                                  <img
                                    className="img-thumbnail"
                                    ref={ ref as React.MutableRefObject<HTMLImageElement> }
                                    src={require(`../../../../assets/images/${item}`)}
                                    alt=""
                                  />
                                </div>
                              </a>
                            )}
                          </Item>
                        </figure>
                      ))}
                  </Gallery>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default ImageHoverEffectsContainer;
