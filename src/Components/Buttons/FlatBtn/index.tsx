import React, { Fragment } from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import { Btn, H5 } from "../../../AbstractElements";
import { FlatButtonData } from "../../../Data/Buttons";

const FlatButtonContain = () => {
  return (
    <Fragment>
      <Col sm="12">
        {FlatButtonData.map((item, i) => (
          <Card key={i}>
            <CardHeader>
              <H5>{item.title}</H5>
              <span>
                {item.span} <code>{item.code}</code> {item.detail}
              </span>
            </CardHeader>
            <CardBody>
              <div className="btn-showcase">
                {item.btnSub.map((btnItem, i) => (
                  <Btn
                    className={btnItem.btnClass}
                    color={btnItem.colorClass}
                    key={i}
                  >
                    {btnItem.title}
                  </Btn>
                ))}
              </div>
            </CardBody>
          </Card>
        ))}
      </Col>
    </Fragment>
  );
};
export default FlatButtonContain;
