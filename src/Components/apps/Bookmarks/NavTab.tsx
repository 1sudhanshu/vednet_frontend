import { useState } from "react";
import { Nav, NavItem } from "reactstrap";
import { Btn } from "../../../AbstractElements";
import { Bookmark, PlusCircle } from "react-feather";
import { Href, NewBookmark, Tags, Views } from "../../../Constant";
import { useDispatch } from "react-redux";
import ModalTag from "./ModalTag";
import BookmarkModal from "./ModalBookMark";
import { useSelector } from "react-redux";
import { sideBarData, sideBarData2 } from "../../../Data/apps/Bookmark/sideBar";
import { RootState } from "./ReducerTypes";

const NavTab = () => {
  const { activeTabss } = useSelector((state: RootState) => state.BookMarkReducer);
  const [addModal, setaddModal] = useState(false);
  const [tagModal, setTagModal] = useState(false); 
  const dispatch = useDispatch();
  const onHandleClick = (id: string) => {dispatch({ type: "updateActiveTabss", payload: id });};
  const tagToggle = () => {setTagModal(!tagModal);};
  const addToggle = () => {setaddModal(!addModal);};
  return (
    <Nav className="main-menu" role="tablist">
      <NavItem>
        <Btn color="deafult" className="badge-light-primary d-block w-100 btn-mail" type="button" onClick={addToggle}>
          <Bookmark className="me-2" />
          {NewBookmark}
          <BookmarkModal value={addModal} addToggle={addToggle} />
        </Btn>
      </NavItem>
      <NavItem><span className="main-title"> {Views}</span></NavItem>
      {sideBarData.map((data, index) => (
        <NavItem key={index}>
          <a className={`show ${activeTabss === data.value ? "active" : ""}`} onClick={() => onHandleClick(data.value)} href={Href}>
            <span className="title"> {data.tittle}</span>
          </a>
        </NavItem>
      ))}
      <NavItem><hr /></NavItem>
      <NavItem>
        <span className="main-title">
          {Tags}
          <span className="pull-right">
            <a href={Href} onClick={tagToggle}>
              <PlusCircle />
            </a>
          </span>
        </span>
      </NavItem>
      <ModalTag value={tagModal} tagToggle={tagToggle} />
      {sideBarData2.map((data, index) => (
        <NavItem key={index}>
          <a className={`show ${activeTabss === data.value ? "active" : ""}`} onClick={() => onHandleClick(data.value)} href={Href}>
            <span className="title"> {data.tittle}</span>
          </a>
        </NavItem>
      ))}
    </Nav>
  );
};

export default NavTab;