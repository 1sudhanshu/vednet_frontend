import { Card, Col } from "reactstrap";
import {  Image } from "../../../../AbstractElements";
import { dynamicImage } from '../../../../Service/index';
import ListOfBlogWithoutDetails from './ListOfBlogWithoutDetails';

const BlogWithoutDetails = () => {
  let blogData = ["blog-5.jpg", "blog-6.jpg", "blog-5.jpg", "blog-6.jpg"];
  return (
    <>
      {blogData.map((data, index) => (
        <Col md="6" xl="3" className="set-col-6" key={index}>
          <Card>
            <div className="blog-box blog-grid text-center">
              <Image className="img-fluid top-radius-blog" src={dynamicImage(`blog/${data}`)} alt="blog"/>
              <ListOfBlogWithoutDetails/>
            </div>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default BlogWithoutDetails;
