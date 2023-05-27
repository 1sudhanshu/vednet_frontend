import { Card, CardBody, Col, Row } from "reactstrap";
import { H6, P, H5 } from "../../../AbstractElements";
import { Latestarticles } from "../../../Constant";
import ArticeVideo2 from "./ArticeVideo2";
import ArticeVideo3 from "./ArticeVideo3";
import { ArticeVideoData1 } from "../../../Data/apps/Faq";

const ArticeVideo = () => {
  return (
      <Col lg="12" className="faq-articles">
        <div className="header-faq">
          <H5 className="mb-0">{Latestarticles}</H5>
        </div>
        <Row>
          <Col xl="4" md="6">
            <Row>
              {ArticeVideoData1.map((item, i) => (
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
          <ArticeVideo2 />
          <ArticeVideo3 />
        </Row>
      </Col>
  );
};
export default ArticeVideo;
