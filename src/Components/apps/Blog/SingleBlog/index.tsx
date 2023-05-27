import { Col, Container, Row } from "reactstrap";
import {  Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import SingleBlogDetails from "./SingleBlogDetails";
import CommentSection from "./CommentSection";

const SingleBlogContainer = () => {
  return (
    <Container fluid={true} className="blog-list-items">
      <Row>
        <Col sm="12">
          <div className="blog-single">
            <div className="blog-box blog-details">
              <Image className="img-fluid w-100" src={dynamicImage("blog/blog-single.jpg")} alt="blog-main"/>
              <SingleBlogDetails />
            </div>
            <CommentSection/>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default SingleBlogContainer;
