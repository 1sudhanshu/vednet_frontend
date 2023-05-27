import { Col } from "reactstrap";
import { H6, LI, UL } from "../../../../AbstractElements";

const Themfylist = () => {
  let number = [2, 3, 4, 5, 6, 7, 8];
  return (
    <Col sm="12" xl="4">
      <H6 className="sub-title">Themfy list</H6>
      <UL className="simple-list">
        <LI><i className="icofont icofont-ui-rate-add txt-success m-r-10" />Lorem ipsum dolor sit amet</LI>
        {number.map((data) => (
        <LI  key={data}><i className="icofont icofont-ui-rate-add txt-success m-r-10" />Lorem ipsum dolor sit amet</LI>
        ))}
      </UL>
    </Col>
  );
};

export default Themfylist;