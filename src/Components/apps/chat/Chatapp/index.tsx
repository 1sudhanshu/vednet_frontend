import { Card, CardBody, Col, Container, Row } from "reactstrap";
import ChatStatus from "./ChatStatus";
import { useEffect } from "react";
import axios from "axios";
import { ChatApi, ChatMemberApi } from "../../../../api";
import { useDispatch } from "react-redux";
import Chatting from "./Chatting";

const ChatappConatainer = () => {
  const dispatch = useDispatch();
  const getChatMembersData = async () => {
    try {
      await axios.get(ChatMemberApi).then((resp) => {
        dispatch({ type: "setAllMembers", payload: resp.data });
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  
  const getChatData = async () => {
    try {
      await axios.get(ChatApi).then((resp) => {
          dispatch({ type: "setChats", payload: resp.data.data });
        });
      } catch (error) {
        console.log('error', error);
      }
    };
  useEffect(() => {
    getChatData();
    getChatMembersData();
  }, []);

  return (
    <Container fluid={true}>
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
              <Chatting />
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ChatappConatainer;
