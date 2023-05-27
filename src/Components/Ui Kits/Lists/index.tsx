import { Container, Row } from "reactstrap";
import DefaultLists from "./DeafultLists";
import FlushStyles from "./FlushStyles";
import JavascriptBase from "./JavascriptBase";
import CustomContents from "./CustomContents/CustomContents";
import WithImage from "./WithImage/WithImage";
import WithImageRound from "./WithImageRound";
import LinksButtons from "./LinksButtons";
import ContextualClass from "./ContextualClass";
import WithBadge from "./WithBadge";
import WithIcons from "./WithIcons";

const ListsConatiner = () => {
  return (
    <Container fluid={true} className="lists-items">
      <Row>
        <DefaultLists />
        <LinksButtons />
        <FlushStyles />
        <ContextualClass />
        <WithBadge />
        <CustomContents />
        <JavascriptBase />
        <WithIcons />
        <WithImage />
        <WithImageRound />
      </Row>
    </Container>
  );
};

export default ListsConatiner;
