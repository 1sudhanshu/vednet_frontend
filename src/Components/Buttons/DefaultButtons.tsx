import React, { Fragment } from "react";
import { Col, Card, CardHeader, CardBody } from "reactstrap";
import { Btn, H5 } from "../../AbstractElements";
import { ButtonsData } from "../../Data/Buttons";

const DefaultButtons = () => {
  return (
    <Fragment>
      <Col sm="12">
        {ButtonsData.map((item, i) => (
          <Card key={i}>
            <CardHeader>
              <H5>{item.title}</H5>
            </CardHeader>
            <CardBody>
              <div className="btn-showcase">
                {item.btnSub.map((btnItem, i) => (
                  <Btn color={btnItem.colorClass} key={i}>
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

export default DefaultButtons;
