import { Card,  Col,  } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import PearlsStepSizingCardBody from "./PearlsStepSizingCardBody";

const PearlsStepSizingClass = () => {
  const span = `A Pearls step with classname <code>.u-pearls-xs</code><code>.u-pearls-sm</code><code>.u-pearls-lg</code>`;
  return (
      <Col sm="12">
        <Card>
          <HeadingCommon Heading="Pearls Step Sizing" dangerouslySetInnerHTML={span}/>
          <PearlsStepSizingCardBody />
        </Card>
      </Col>
  );
};

export default PearlsStepSizingClass;
