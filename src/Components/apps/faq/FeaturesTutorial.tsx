import { Col, Row } from "reactstrap";
import { H5 } from "../../../AbstractElements";
import { FeaturedTutorials } from "../../../Constant";
import FeaturesTutorial from "../Knowledgebase/FeaturesTutorial";

const FAQFeaturesTutorial = () => {
  return (
    <Col lg="12" className="featured-tutorial">
      <div className="header-faq">
        <H5 className="mb-0">{FeaturedTutorials}</H5>
      </div>
      <Row>
        <FeaturesTutorial />
      </Row>
    </Col>
  );
};
export default FAQFeaturesTutorial;
