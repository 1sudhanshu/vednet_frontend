import { Fragment } from "react";
import { Col } from "reactstrap";
import { H6 } from "../../../../AbstractElements";

const SubOrderList = () => {
  let number = [2, 3, 4, 5];
  return (
    <Col sm="12" xl="4">
      <H6 className="sub-title">Order list</H6>
      <dl>
        <dt>Lorem ipsum dolor sit amet</dt>
        <dd>- ipsum dolor sit amet</dd>
        {number.map((data) => (
          <Fragment key={data}>
            <dt>Lorem ipsum dolor sit amet</dt>
            <dd>- ipsum dolor sit amet</dd>
          </Fragment>
        ))}
      </dl>
    </Col>
  );
};

export default SubOrderList;
