import { Card, Col } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import StatesClassCardBody from "./StatesClassCardBody";

const PearlsStepStatesClass = () => {
  const span = `A pearls step states with different class<code>.done</code><code>.currunt</code><code>.error</code><code>.disabled</code>`;
  return (
    <Col sm="12">
      <Card>
        <HeadingCommon
          Heading="Pearls Step states "
          dangerouslySetInnerHTML={span}
        />
        <StatesClassCardBody />
      </Card>
    </Col>
  );
};

export default PearlsStepStatesClass;
