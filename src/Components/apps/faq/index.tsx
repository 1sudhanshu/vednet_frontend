import { Container, Row } from "reactstrap";
import Articals from "../Knowledgebase/Articals";
import Questions from "./Questions";
import FAQFeaturesTutorial from "./FeaturesTutorial";
import ArticeVideo from "./ArticeVideo";

const FaqContainer = () => {
  return (
    <Container fluid>
      <div className="faq-wrap">
        <Row>
          <Articals />
          <Questions />
          <FAQFeaturesTutorial />
          <ArticeVideo />
        </Row>
      </div>
    </Container>
  );
};

export default FaqContainer;
