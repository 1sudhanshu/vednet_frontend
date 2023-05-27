import { Col } from "reactstrap";
import { Headings } from "../../../../Data/Components/UiKits/Typography/Headers";
import { P } from "../../../../AbstractElements";

const DynamicHeaderDetail = () => {
  return (
    <Col sm="12" xl="6">
      {Headings.map((data, index) => (
        <P key={index} className={data.className}>
          {data.tittle}
          <small>SubHeading</small>
        </P>
      ))}
    </Col>
  );
};

export default DynamicHeaderDetail;
