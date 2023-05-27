import { Card, CardBody } from "reactstrap";
import VerticalAlignmentBody from "./VerticalAlignmentBody";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { P } from "../../../../AbstractElements";

const VerticalAlignment = () => {
  return (
    <Card>
      <HeadingCommon Heading="Vertical Alignment" />
      <CardBody className=" grid-showcase grid-align">
        <P>
          Use flexbox alignment utilities to vertically and horizontally align
          columns.
        </P>
        <VerticalAlignmentBody />
      </CardBody>
    </Card>
  );
};

export default VerticalAlignment;
