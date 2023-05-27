import { Fragment, useEffect, useRef, useState } from "react";
import { Image, LI, UL } from "../../../../../AbstractElements";
import { ChatAppTypes, allMembersType, messageType } from "../../ChatAppTypes";
import { useSelector } from "react-redux";
import { dynamicImage } from "../../../../../Service";
import { useDispatch } from "react-redux";

const ChatMessage = () => {
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0);
  const { allMembers, chats, selectedUser, currentUser } = useSelector((state: ChatAppTypes) => state.ChatReducer);
  const dispatch = useDispatch();

  const fetchChatAsync = () => {
    if (chats.length > 0) {
      const currentUserId = 0;
      var chat = chats.filter((x: any) => x.users.includes(currentUserId));
      var selectedUser = chats[0].users.find((x: any) => x !== currentUserId);
      let oneSelect =allMembers.find((x:any) => x.id === selectedUser);
      if (allMembers.length > 0) {
        dispatch({ type: "setChats", payload: chat });
        dispatch({ type: "setSelectedUser", payload: oneSelect });
      }

      if (allMembers.length > 0)
        return allMembers.find((x: any) => x.id === selectedUser);
    }
  };

  useEffect(() => {
    dispatch({ type: "fetchChatMemberAsync" });
    fetchChatAsync();
    setScroll(1);
  }, [allMembers.length, chats.length]);
  
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats, scroll]);

  const selectedChat =allMembers && chats && selectedUser? chats.find((x: any) =>x.users.includes(currentUser.id) &&x.users.includes(selectedUser.id)): null;
  
  
  return (
    <Fragment>
      {allMembers && chats && selectedUser ? (
        <div className="chat-history chat-msg-box custom-scrollbar">
          <UL className="simple-list">
            {selectedChat && selectedChat.messages.length > 0 ? (
              selectedChat.messages.map((item: messageType, id: number) => {
                const participators:allMembersType | any = allMembers.find((x:allMembersType) => x.id === item.sender);
                return (
                  <LI key={id} className={` ${item.sender !== currentUser.id? "": "clearfix"}`} >
                    <div className={`message my-message ${item.sender !== currentUser.id? "": "pull-right other-message"}`}>
                      <Image alt={"user"} src={`${dynamicImage(participators.thumb)}`} className={`rounded-circle ${item.sender !== currentUser.id ? 'float-start' : 'float-end'} chat-user-img img-30 h-auto`} />  
                      <div className="message-data text-end">
                        <span className="message-data-time">{item.time}</span>
                      </div>
                      {item.text}
                    </div>
                  </LI>
                );
              })
            ) : (
              <div><Image className="img-fluid w-100 h-auto" src={dynamicImage("start-conversion.jpg")} alt="start conversion"/></div>
            )}
            <LI>
              <div ref={bottomRef}></div>
            </LI>
          </UL>
        </div>
      ) : (
        <div className="loading"></div>
      )}
    </Fragment>
  );
};
export default ChatMessage;
