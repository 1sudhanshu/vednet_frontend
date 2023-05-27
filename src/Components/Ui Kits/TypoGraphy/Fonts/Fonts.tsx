import { Card, CardBody, Col } from "reactstrap";
import { H1, H2, H3, H4, H5, H6 } from "../../../../AbstractElements";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DyanmicFonts from "./DyanmicFonts";
const Fonts = () => {
  return (
    <>
      <Col sm="12" xl="4">
        <Card>
          <HeadingCommon Heading="Very Thin (100)" />
          <CardBody className="typography">
            <H1 className="f-w-100">Heading 1</H1>
            <H2 className="f-w-100">Heading 2</H2>
            <H3 className="f-w-100">Heading 3</H3>
            <H4 className="f-w-100">Heading 4</H4>
            <H5 className="f-w-100">Heading 5</H5>
            <H6 className="f-w-100">Heading 6</H6>
          </CardBody>
        </Card>
      </Col>
      <DyanmicFonts />
    </>
  );
};
export default Fonts;
