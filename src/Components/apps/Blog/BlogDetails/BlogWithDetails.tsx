import { Card, Col, Row } from "reactstrap";
import { H6, Image, LI, P, UL } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import {BlogBy,BlogWithDetailHeading,BlogWithoutDetailHeading} from "../../../../Constant";

const BlogWithDetails = () => {
  let BlogData = [{ image: "2", hits: "0", date: "02" },{ image: "3", hits: "02", date: "03" },];
  return (
    <Col xl="6" className="set-col-12 box-col-12">
      {BlogData.map((data, index) => (
        <Card key={index}>
          <Row className="blog-box blog-list">
            <Col sm="5">
              <Image className="img-fluid sm-100-w" src={dynamicImage(`blog/blog-${data.image}.jpg`)} alt=""/>
            </Col>
            <Col sm="7">
              <div className="blog-details">
                <div className="blog-date digits">
                  <span>{data.date}</span> January 2023
                </div>
                <H6>{BlogWithoutDetailHeading}</H6>
                <div className="blog-bottom-content">
                  <UL className="blog-social flex-row simple-list">
                    <LI>{BlogBy} Admin</LI>
                    <LI className="digits">{data.hits} Hits</LI>
                  </UL>
                  <hr />
                  <P className="mt-0">{BlogWithDetailHeading}</P>
                </div>
              </div>
            </Col>
          </Row>
        </Card>
      ))}
    </Col>
  );
};

export default BlogWithDetails;
