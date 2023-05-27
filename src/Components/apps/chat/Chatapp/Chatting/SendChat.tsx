import { useState } from "react";
import { Col, Input, InputGroup, Row } from "reactstrap";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { Btn, Image } from "../../../../../AbstractElements";
import { Send } from "../../../../../Constant";
import { useSelector } from "react-redux";
import { ChatAppTypes } from "../../ChatAppTypes";
import { useDispatch } from "react-redux";
import { dynamicImage } from "../../../../../Service";

const SendChat = () => {
  const [messageInput, setMessageInput] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const { chats, selectedUser, currentUser } = useSelector((state: ChatAppTypes) => state.ChatReducer);
  const dispatch = useDispatch();
  const addEmoji = (emoji: string) => {
    const text = `${messageInput}${emoji}`;
    setShowEmojiPicker(false);
    setMessageInput(text);
  };
  const handleMessageChange = (message: string) => {
    setMessageInput(message);
  };
  const handleMessagePress = () => {
    var container = document.querySelector(".chat-history");
    setTimeout(function () {container?.scrollBy({ top: 200, behavior: "smooth" });}, 310);
    let currentUserId = currentUser.id;
    let selectedUserId = selectedUser.id;
    let selectedUserName = selectedUser.name;
    if (messageInput.length > 0) {
      dispatch({type: "sendMessageAsync",payload: { currentUserId, selectedUserId, messageInput, chats },});
      setMessageInput("");
      setTimeout(() => {
        const replyMessage ="Hey This is " +selectedUserName +", Sorry I busy right now, I will text you later";
        if (selectedUser.online === true)
          document.querySelector(".status-circle")?.classList.add("online");
        dispatch({type: "replyByUserAsync",payload: { currentUserId, selectedUserId, replyMessage, chats },});
      }, 2000);
    }
  };
  return (
    <div className="chat-message clearfix">
      <Row>
        <div>
          {showEmojiPicker ? (<Picker data={data} onEmojiSelect={(e: any) => { addEmoji(e.native);}}/>) : null}
        </div>
        <Col xl="12" className="d-flex">
          <div className="smiley-box bg-primary">
            <div className="picker" onClick={() => setShowEmojiPicker(!showEmojiPicker)}>
              <Image src={dynamicImage("smiley.png")} alt="smiley" />
            </div>
          </div>
          <InputGroup className="text-box">
            <Input type="text" className="input-txt-bx" placeholder="Type a message......" value={messageInput} onChange={(e) => handleMessageChange(e.target.value)}/>
            <Btn className="input-group-text" color="primary" onClick={handleMessagePress}>{Send}</Btn>
          </InputGroup>
        </Col>
      </Row>
    </div>
  );
};

export default SendChat;
