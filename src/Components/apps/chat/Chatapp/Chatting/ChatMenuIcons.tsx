import { Headphones, Paperclip, Search, Video, Menu } from "react-feather";
import { LI, UL } from "../../../../../AbstractElements";
import { useDispatch, useSelector } from 'react-redux';
import { ChatAppTypes } from "../../ChatAppTypes";
import { useEffect } from "react";

const ChatMenuIcons = () => {
  const { toggleSideBar } = useSelector((state: ChatAppTypes) => state.ChatReducer);
  const toggleChatSideBar = () => {
      if (window.innerWidth <= 1200) {
       dispatch({ type: "setToggleSideBar", payload: toggleSideBar? true:false })
     } 
      else {
      dispatch({ type: "setToggleSideBar", payload: true })
    } 
  }
  useEffect(() => {
    toggleChatSideBar()
    window.addEventListener("resize", () => {
      toggleChatSideBar()
    });
  }, [toggleSideBar, window.innerWidth]);
  const dispatch = useDispatch()
  return (
    <UL className="simple-list list-inline float-start float-sm-end chat-menu-icons flex-row">
      <LI className="list-inline-item">
        <Search />
      </LI>
      <LI className="list-inline-item">
        <Paperclip />
      </LI>
      <LI className="list-inline-item">
        <Headphones />
      </LI>
      <LI className="list-inline-item">
        <Video />
      </LI>
      <LI className="list-inline-item toogle-bar" onClick={()=>{dispatch({ type: "setToggleSideBar", payload:!toggleSideBar })}} >
        <Menu />
      </LI>
    </UL>
  );
};

export default ChatMenuIcons;
