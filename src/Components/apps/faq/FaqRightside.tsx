import { Row, Col } from "reactstrap";
import LatestUpdate from "./LatestUpdates";
import SearchArticle from "./SearchArticle";
import AskQuestions from "./AskQuestions";

const FaqRightsidebae = () => {
  return (
    <Col xl="4 xl-40 box-col-40" lg="6" md="5">
      <Row>
        <SearchArticle />
        <AskQuestions />
        <LatestUpdate />
      </Row>
    </Col>
  );
};
export default FaqRightsidebae;
