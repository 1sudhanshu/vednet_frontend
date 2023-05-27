import { Col, Container, Row } from "reactstrap";
import Articals from "./Articals";
import { FeaturedTutorials } from "../../../Constant";
import { H5 } from "../../../AbstractElements";
import FeaturesTutorial from "./FeaturesTutorial";
import ArticeVideo from "../faq/ArticeVideo";
import CategoryData from "./CategoryData";

const KnowledgebaseContainer = () => {
  return (
    <Container fluid>
      <Row>
        <Articals />
        <CategoryData />
        <Col lg="12" className="featured-tutorial">
          <div className="header-faq">
            <H5 className="mb-0">{FeaturedTutorials}</H5>
          </div>
          <Row>
            <FeaturesTutorial />
          </Row>
        </Col>
        <ArticeVideo />
      </Row>
    </Container>
  );
};

export default KnowledgebaseContainer;
