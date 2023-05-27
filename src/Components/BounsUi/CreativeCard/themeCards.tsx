import { Fragment } from "react";
import { Col, Card, CardBody } from "reactstrap";
import { P } from "../../../AbstractElements";
import { CreativeCardData } from "../../../Data/Components/BonusUI/CreativeCard";
import HeadingCommon from "../../../Common/HeadingCommon";

const CreativeCardsCommon = () => {
  return (
    <Fragment>
      {CreativeCardData.map((item) => (
        <Col sm="12" xl="6" key={item.id}>
          <Card className={item.cardClass && item.cardClass}>
            <HeadingCommon className={item.headerClass} Heading={item.title} />
            <CardBody>
              <P>{item.pare}</P>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default CreativeCardsCommon;
