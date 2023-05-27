import React from "react";
import { Col } from "reactstrap";
import { H6, LI, OL } from "../../../../AbstractElements";

const OrderList = () => {
  return (
    <Col sm="12" xl="4">
      <H6 className="sub-title">Order list</H6>
      <OL>
        <LI className="p-0">Lorem ipsum dolor sit amet</LI>
        <LI className="p-0">Lorem ipsum dolor sit amet</LI>
        <LI className="p-0">Lorem ipsum dolor sit amet</LI>
        <LI>
          <OL>
            <LI  className="p-0">Lorem ipsum dolor sit amet</LI>
            <LI  className="p-0">Lorem ipsum dolor sit amet</LI>
            <LI  className="p-0">Lorem ipsum dolor sit amet</LI>
            <LI  className="p-0">Lorem ipsum dolor sit amet</LI>
            <LI  className="p-0">Lorem ipsum dolor sit amet</LI>
          </OL>
        </LI>
        <LI className="p-0">Lorem ipsum dolor sit amet</LI>
        <LI className="p-0">Lorem ipsum dolor sit amet</LI>
      </OL>
    </Col>
  );
};

export default OrderList;
