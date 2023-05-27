import { Card, CardBody, Col, Row } from "reactstrap";
import { H6, P } from "../../../AbstractElements";
import { ArticeVideoData2 } from "../../../Data/apps/Faq";

const ArticeVideo2 = () => {
  return (
    <Col xl="4" md="6">
      <Row>
        {ArticeVideoData2.map((item, i) => (
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
export default ArticeVideo2;
