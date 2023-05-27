import { Card, CardBody, CardHeader, Col } from "reactstrap";
import { H5 } from "../../../AbstractElements";
import { AskQuestion, Href, Navigation } from "../../../Constant";
import { MessageSquare, Settings } from "react-feather";
import NavigationOption from "./NavigationOption";

const AskQuestions = () => {
  return (
    <Col lg="12">
      <Card className="card-mb-faq">
        <CardHeader className="faq-header">
          <H5 className="m-0">{Navigation}</H5>
          <Settings />
        </CardHeader>
        <CardBody className="faq-body">
          <div className="navigation-btn">
            <a
              className="btn btn-primary"
              style={{ color: "#fff" }}
              href={Href}
            >
              <MessageSquare className="m-r-10" />
              {AskQuestion}
            </a>
          </div>
          <NavigationOption />
        </CardBody>
      </Card>
    </Col>
  );
};

export default AskQuestions;
