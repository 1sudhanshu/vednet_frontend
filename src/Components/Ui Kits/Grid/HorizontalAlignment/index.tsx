import { Card, CardBody } from "reactstrap";
import HorizontalAlignmentBody from "./HorizontalAlignmentBody";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { P } from "../../../../AbstractElements";

const HorizontalAlignment = () => {
  return (
    <Card>
      <HeadingCommon Heading="Horizontal Alignment" />
      <CardBody className=" grid-showcase grid-align">
        <P>
          Use flexbox alignment utilities to vertically and horizontally align
          columns.
        </P>
        <HorizontalAlignmentBody />
      </CardBody>
    </Card>
  );
};

export default HorizontalAlignment;
