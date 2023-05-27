import { Col, Container, Row } from "reactstrap";
import BadgesExample from "./BadgesExample";
import ContextualVariations from "./ContextualVariations";
import ContextualVariations2 from "./ContextualVariations2";
import PillsWithIcon from "./PillsWithIcon";
import PillsWithNumber from "./PillsWithNumber";
import TagsWithIcon from "./TagsWithIcon";
import TagsWithNumber from "./TagsWithNumber";
import BadgesAsPartButtons from "./BadgesAsPartButtons";

const TagPillsContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col sm="12" xl="6">
          <ContextualVariations />
        </Col>
        <Col sm="12" xl="6">
          <ContextualVariations2 />
        </Col>
        <Col sm="12" xl="6">
          <TagsWithNumber />
        </Col>
        <Col sm="12" xl="6">
          <PillsWithNumber />
        </Col>
        <Col sm="12" xl="6">
          <TagsWithIcon />
        </Col>
        <Col sm="12" xl="6">
          <PillsWithIcon />
        </Col>
        <Col sm="12" xl="6">
          <BadgesExample />
        </Col>
        <Col sm="12" xl="6">
          <BadgesAsPartButtons />
        </Col>
      </Row>
    </Container>
  );
};

export default TagPillsContainer;
