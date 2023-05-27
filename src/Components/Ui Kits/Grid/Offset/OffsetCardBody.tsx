import OffsetBody from "./OffsetBody";
import { P } from "../../../../AbstractElements";
import { CardBody } from "reactstrap";

const OffsetCardBody = () => {
  return (
    <CardBody className="grid-showcase">
      <P>
        Move columns to the right using <code>.offset-md-*</code> classes. These
        classes increase the left margin of a column by <code>*</code> columns.
        For example, <code>.offset-md-4</code> moves <code>.col-md-4</code> over
        four columns.
      </P>
      <OffsetBody />
    </CardBody>
  );
};

export default OffsetCardBody;
