import { Card, Row, CardBody, Col } from "reactstrap";
import {  H6, LI, UL } from "../../../../AbstractElements";
import FontawesomeList from "./FontawesomeList";
import ICOIconlist from "./ICOIconlist";
import OrderList from "./OrderList";
import SubOrderList from "./SubOrderList";
import Themfylist from "./Themfylist";
import HeadingCommon from "../../../../Common/HeadingCommon";

const ListingTypography = () => {
  let number = [2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Card>
      <HeadingCommon Heading="Listing Typography"/>
      <CardBody>
        <Row>
          <Col sm="12" xl="4">
            <H6 className="sub-title">Unorder list</H6>
            <UL className="simple-list">
              <LI>Lorem ipsum dolor sit amet</LI>
              {number.map((data) => (
                  <LI key={data}>Lorem ipsum dolor sit amet</LI>
              ))}
            </UL>
          </Col>
          <OrderList />
          <SubOrderList />
          <FontawesomeList />
          <ICOIconlist />
          <Themfylist />
        </Row>
      </CardBody>
    </Card>
  );
};

export default ListingTypography;