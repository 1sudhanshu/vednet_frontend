import { Fragment } from "react";
import { RibbonData } from "../../../Data/Components/BonusUI/Ribbon";
import { Col, Card, CardBody } from "reactstrap";
import { P, Ribbon } from "../../../AbstractElements";

const DynamicRibbon = () => {
  return (
    <Fragment>
      {RibbonData.map((item) => (
        <Col key={item.id} sm="14" md="6" lg="4">
          <Card className={item.wrapperClass}>
            <CardBody>
              <Ribbon className={item.class}>{item?.title}</Ribbon>
              <P>{item.pera}</P>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default DynamicRibbon;
