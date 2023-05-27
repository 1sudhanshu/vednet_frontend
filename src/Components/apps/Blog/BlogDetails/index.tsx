import { Container, Row } from "reactstrap";
import MarkjecnoBlog from "./MarkjencoBlog";
import BlogWithDetails from "./BlogWithDetails";
import BlogWithoutDetails from "./BlogWithoutDetails";

const BlogDetailsContainer = () => {
  return (
    <Container fluid={true} className="blog-list-items">
      <Row>
        <MarkjecnoBlog/>
        <BlogWithDetails/>
        <BlogWithoutDetails/>
      </Row>
    </Container>
  );
};

export default BlogDetailsContainer;
