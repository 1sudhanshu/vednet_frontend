import { H6, Image, LI, P, UL } from "../../../AbstractElements";
import { Card, CardBody, CardFooter, Col } from "reactstrap";
import { Rating } from "react-simple-star-rating";
import { dynamicImage } from "../../../Service";
import { featuredData } from "../../../Data/apps/Faq";

const FeaturesTutorial = () => {
  return (
    <>
      {featuredData.map((item, id) => (
        <Col xl="3" sm="6" className="box-col-3" key={id}>
          <Card className="features-faq product-box">
            <div className="faq-image product-img">
              <div className="knowledgebase-image">
                <Image
                  alt="feature"
                  className="img-fluid"
                  src={dynamicImage(item.img)}
                />
              </div>
              <div className="product-hover">
                <UL className="simple-list flex-row">
                  <LI><i className="icon-link"></i></LI>
                  <LI><i className="icon-import"></i></LI>
                </UL>
              </div>
            </div>
            <CardBody>
              <H6>{item.title}</H6>
              <P>{item.short_description}</P>
            </CardBody>
            <CardFooter className="d-flex align-items-center justify-content-between">
              <span>{item.date}</span>
              <Rating fillColor="#ff5f24" initialValue={Math.random() * 5} size={14}/>
            </CardFooter>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default FeaturesTutorial;
