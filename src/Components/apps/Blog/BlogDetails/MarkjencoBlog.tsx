import { Card, Col } from "reactstrap";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import MarkjencoBlogDetails from "./MarkjencoBlogDetails";

const MarkjencoBlog = () => {
  return (
    <Col xl="6" className="set-col-12 box-col-12">
      <Card>
        <div className="blog-box blog-shadow">
          <Image className="img-fluid" src={dynamicImage("blog/blog.jpg")} alt="blog image"/>
          <MarkjencoBlogDetails />
        </div>
      </Card>
    </Col>
  );
};

export default MarkjencoBlog;
