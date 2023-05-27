import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H5, P } from "../../../AbstractElements";
import { LatestUpdates, SeeAll } from "../../../Constant";
import { LatestData } from "../../../Data/apps/Faq";

const LatestUpdate = () => {
  return (
    <Col lg="12">
      <Card>
        <CardHeader className="faq-header">
          <H5 className="d-inline-block m-0">{LatestUpdates}</H5>
          <span className="pull-right d-inline-block">{SeeAll}</span>
        </CardHeader>
        <CardBody className="faq-body">
          {LatestData.map((item, i) => (
            <div className="d-flex updates-faq-main" key={i}>
              <div className="updates-faq">{item.Iconclass}</div>
              <div className="flex-grow-1 updates-bottom-time">
                <P>
                  {item.name} <a href="#javascript">{item.val}</a> {item.title}
                </P>
                <P>{item.time}</P>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default LatestUpdate;
