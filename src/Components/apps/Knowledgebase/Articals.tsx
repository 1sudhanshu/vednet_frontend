import { H5, P } from "../../../AbstractElements";
import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import { ArticalsData } from "../../../Data/apps/KnowledegesBase";

const Articals = () => {
  return (
    <Fragment>
      {ArticalsData.map((item) => (
        <Col xl="4" className={item.class2} key={item.id}>
          <Card className="bg-primary">
            <CardBody>
              <div className="d-flex faq-widgets">
                <div className="flex-grow-1">
                  <H5>{item.title}</H5>
                  <P>{item.paragraph}</P>
                </div>
                {item.icon}
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </Fragment>
  );
};
export default Articals;
