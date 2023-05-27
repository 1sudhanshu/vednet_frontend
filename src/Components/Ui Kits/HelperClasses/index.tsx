import { Col, Container, Row } from "reactstrap";
import AllBordersColor from "./AllBordersColor";
import BackgroundColor from "./BackgroundColor";
import BadgeColor from "./BadgeColor";
import BorderRadius from "./BorderRadius";
import BorderWidth from "./BorderWidth";
import ButtonColor from "./ButtonColor";
import ButtonOutline from "./ButtonOutline";
import Float from "./Float";
import FontSize from "./FontSize";
import FontStyle from "./FontStyle";
import FontWeight from "./FontWeight";
import ImageSizes from "./ImageSizes";
import MarginBottom from "./MarginBottom";
import MarginLeft from "./MarginLeft";
import MarginRight from "./MarginRight";
import MarginsCard from "./MarginsCard";
import MarginTop from "./MarginTop";
import Overflow from "./Overflow";
import PaddingBottom from "./PaddingBottom";
import PaddingCard from "./PaddingCard";
import PaddingLeft from "./PaddingLeft";
import PaddingRight from "./PaddingRight";
import PaddingTop from "./PaddingTop";
import Position from "./Position";
import TextColor from "./TextColor";
import VerticalAlign from "./VerticalAlign";

const HelperClassesContainer = () => {
  return (
    <Container fluid={true}>
      <Row>
        <Col xl="6" lg="6" md="6">
          <PaddingCard />
        </Col>
        <Col xl="6" lg="6" md="6">
          <MarginsCard />
        </Col>
        <Col xl="6" lg="6" md="6">
          <PaddingLeft />
        </Col>
        <Col xl="6" lg="6" md="6">
          <PaddingRight />
        </Col>
        <Col xl="6" lg="6" md="6">
          <PaddingTop />
        </Col>
        <Col xl="6" lg="6" md="6">
          <PaddingBottom />
        </Col>
        <Col xl="6" lg="6" md="6">
          <MarginLeft />
        </Col>
        <Col xl="6" lg="6" md="6">
          <MarginRight />
        </Col>
        <Col xl="6" lg="6" md="6">
          <MarginTop />
        </Col>
        <Col xl="6" lg="6" md="6">
          <MarginBottom />
        </Col>
        <Col xl="6" lg="6" md="6">
          <VerticalAlign />
        </Col>
        <Col xl="6" lg="6" md="6">
          <ImageSizes />
        </Col>
        <Col xl="6" lg="6" md="6">
          <TextColor />
        </Col>
        <Col xl="6" lg="6" md="6">
          <BadgeColor />
        </Col>
        <Col xl="6">
          <BackgroundColor />
        </Col>
        <Col xl="6">
          <ButtonColor />
        </Col>
        <Col xl="6">
          <BorderRadius /> <FontWeight /> <FontStyle /> <Float /> <Overflow />
        </Col>
        <Col xl="6">
          <FontSize />
        </Col>
        <Col xl="6">
          <AllBordersColor />
        </Col>
        <Col xl="6">
          <BorderWidth /> <Position /> <ButtonOutline />
        </Col>
      </Row>
    </Container>
  );
};

export default HelperClassesContainer;
