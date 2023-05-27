import { Card, Col, CardBody } from "reactstrap";
import { TopWidgetsdatas } from "../../../../Data/widgets/TopWidgets";
import { Fragment } from "react";

const TopWidgets = () => {
  return (
    <Fragment>
      {TopWidgetsdatas.map((data, index) => (
        <Col sm="6" xl="3" lg="6" key={index}>
          <Card className="o-hidden">
            <CardBody className={`b-r-4 ${data.CardBodyClass}`}>
              <div className="d-flex static-top-widget">
                <div className="align-self-center text-center">{data.icon}</div>
                <div className="flex-grow-1">
                  <span className="m-0">{data.tittle}</span>
                  <h4 className="mb-0 counter">{data.amount}</h4>
                  {data.iconClass}
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};
export default TopWidgets;
