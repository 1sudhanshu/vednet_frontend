import { Card, Col, CardHeader } from "reactstrap";
import { Chat } from "../../../../Constant";
import { H5 } from "../../../../AbstractElements";
import ChatAppBody from "./ChatAppBody";

const ChatApp = () => {
  return (
    <Col xl="4" className=" xl-50 box-col-6">
      <Card className=" card-with-border">
        <CardHeader className="card-no-border">
          <H5>{Chat}</H5>
        </CardHeader>
        <ChatAppBody />
      </Card>
    </Col>
  );
};

export default ChatApp;
