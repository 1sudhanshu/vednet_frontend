import { Fragment } from "react";
import { Col, Card, CardBody, CardFooter } from "reactstrap";
import { H6, P } from "../../../AbstractElements";
import { BasicCardData } from "../../../Data/Components/BonusUI/BasicCard";
import HeadingCommon from "../../../Common/HeadingCommon";

const BasicCommon = () => {
  return (
    <Fragment>
      {BasicCardData.map((item) => (
        <Col sm="12" xl="6" key={item.id}>
          <Card className={item.flatclass}>
            <HeadingCommon
              className={item.colorClass ? item.colorClass : item.headerClass && item.headerClass}
              icon={item.icon}
              Heading={item.title}
            />
            <CardBody
              className={
                item.colorClass
                  ? item.colorClass
                  : item.bodyClass && item.bodyClass
              }
            >
              <P className="mb-0">{item.pare}</P>
            </CardBody>
            {item.footer && (
              <CardFooter
                className={
                  item.colorClass
                    ? item.colorClass
                    : item.footerClass && item.footerClass
                }
              >
                <H6 className="mb-0">{item.footer}</H6>
              </CardFooter>
            )}
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};

export default BasicCommon;
