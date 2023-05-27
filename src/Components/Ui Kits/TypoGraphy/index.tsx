import { Container, Row } from "reactstrap";
import DisplayHeadings from "./DisplayHeadings";
import Heading from "./Heading";
import Lead from "./Lead";
import ListingTypography from "./ListingTypography/ListingTypography";
import HeaderDetail from "./HeaderDetail";
import Fonts from "./Fonts/Fonts";
import Blockquotes from "./Blockquotes";
import TextColor from "./TextColor";
import InlineTextElements from "./InlineTextElements";

const TypoGraphyContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <HeaderDetail />
        <Fonts />
        <Heading />
        <DisplayHeadings />
        <Lead />
        <InlineTextElements />
        <TextColor />
        <ListingTypography />
        <Blockquotes />
      </Row>
    </Container>
  );
};

export default TypoGraphyContainer;
