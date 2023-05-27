import React, { Fragment } from 'react';
import { Row, Col, Card, CardBody, ButtonGroup, CardHeader } from 'reactstrap';
import { Btn, H5 } from '../../../AbstractElements';
import { GroupBtnData } from '../../../Data/Buttons';

const GroupButtonClass = () => {
  return (
    <Fragment>
      {GroupBtnData.map((item, i) =>
        <div className="col-12" key={i}>
          <Card>
            <CardHeader>
              <H5>{item.title}</H5>
            </CardHeader>
            <CardBody>
              <div className="btn-group-showcase">
                <Row>
                  {item.color.map((colorItem, i) =>
                    <Col xl="4" md="6" sm="12 xl-50" className={colorItem.colClass ? colorItem.colClass : ''} key={i}>
                      <ButtonGroup>
                        <Btn   color={ colorItem.colorClass}  >{colorItem.title1}</Btn>
                        <Btn   color={ colorItem.colorClass}  >{colorItem.title2}</Btn>
                        <Btn   color={ colorItem.colorClass}  >{colorItem.title3}</Btn>
                      </ButtonGroup>
                    </Col>
                  )}
                </Row>
              </div>
            </CardBody>
          </Card>
        </div>
      )}

    </Fragment>
  );
};

export default GroupButtonClass;