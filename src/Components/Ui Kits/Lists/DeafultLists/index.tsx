import { Card, CardBody,  Col } from "reactstrap";
import {  LI, UL } from "../../../../AbstractElements";
import HeadingCommon from "../../../../Common/HeadingCommon";
import DynamicList from "./DynamicList";

const DefaultLists = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <HeadingCommon Heading="Default List" />
        <CardBody>
          <UL className='simple-list'>
            <LI>Cras justo odio</LI>
            <LI>Dapibus ac facilisis in</LI>
            <LI>Morbi leo risus</LI>
            <LI>Porta ac consectetur ac</LI>
            <LI>Vestibulum at eros</LI>
          </UL>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DefaultLists;
