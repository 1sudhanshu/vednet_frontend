import { Col, Row } from "reactstrap";
import { Btn, H2, Image } from "../../../../AbstractElements";
import CallIcons from "./CallIcons";
import { EndCall } from "../../../../Constant";
import { dynamicImage } from "../../../../Service";

const ChatHistory = () => {
  return (
    <Row>
      <Col className="text-center pe-0 call-content">
        <div>
          <div className="total-time">
            <H2 className="digits">36 : 56</H2>
          </div>
          <CallIcons />
          <Btn size="lg" className="btn-danger-gradien btn-lg">
            {EndCall}
          </Btn>
          <div className="receiver-img">
            <Image
              src={dynamicImage("other-images/receiver-img.jpg")}
              alt="receiver-img"
            />
          </div>
        </div>
      </Col>
      <Col sm="7" className="ps-0 caller-img">
        <Image className="img-fluid" src={dynamicImage("other-images/caller.jpg")} alt="caller"/>
      </Col>
    </Row>
  );
};

export default ChatHistory;
