import { Card, CardBody, Col, Container, Row } from "reactstrap";
import VideoCallPage from "./VideoCallPage";
import ChatMenu from "../Chatapp/Chatting/ChatMenu";
import axios from "axios";
import { ChatMemberApi } from "../../../../api";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import ChatStatus from "../Chatapp/ChatStatus";

const VideoChatContainer = () => {
  const dispatch = useDispatch();
  const getChatMembersData = async () => {
    try {
      await axios.get(ChatMemberApi).then((resp) => {
        dispatch({ type: "setAllMembers", payload: resp.data });
        dispatch({ type: "fetchChatMemberAsync" });
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    getChatMembersData();
  }, []);

  return (
    <Container fluid>
      <Row>
        <Col sm="12" className="call-chat-sidebar">
          <Card>
            <CardBody className="chat-body">
              <ChatStatus />
            </CardBody>
          </Card>
        </Col>
        <Col className="call-chat-body">
          <Card>
            <CardBody className="p-0">
              <Row className="chat-box">
                <VideoCallPage />
                <ChatMenu />
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default VideoChatContainer;
