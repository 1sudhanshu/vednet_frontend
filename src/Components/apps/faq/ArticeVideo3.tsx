import { Card, CardBody, Col, Row } from "reactstrap";
import { H6, P } from "../../../AbstractElements";
import { ArticeVideoData3 } from "../../../Data/apps/Faq";

const ArticeVideo3 = () => {
  return (
    <Col xl="4">
      <Row>
        {ArticeVideoData3.map((item, i) => (
          <Col sm="12" key={i}>
            <Card>
              <CardBody>
                <div className="d-flex">
                  {item.IconClass}
                  <div className="flex-grow-1">
                    <H6 className="f-w-600">{item.title}</H6>
                    <P>{item.discription}</P>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};
export default ArticeVideo3;
