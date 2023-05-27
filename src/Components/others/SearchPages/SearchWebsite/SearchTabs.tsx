import { useState } from "react";
import { Nav, NavLink, NavItem } from "reactstrap";
import { All, Images, Maps, Settings, Videos } from "../../../../Constant";
interface propsType {
  callbackActive: (val: number) => void;
  activeTabValue:number
}
const SearchTabs = ({ callbackActive,activeTabValue }: propsType) => {
  const [activeTab, setActiveTab] = useState(activeTabValue);
  const navData = [
    { id: 1, icon: <i className="icon-target"></i>, tittle: All },
    { id: 2, icon: <i className="icon-image"></i>, tittle: Images },
    { id: 3, icon: <i className="icon-video-clapper"></i>, tittle: Videos },
    { icon: <i className="icon-map-alt"></i>, tittle: Maps },
    { icon: <i className="icon-settings"></i>, tittle: Settings },
  ];
  const handleTab = (id: number | undefined) => {
    if (id !== undefined) {
      setActiveTab(id);
      callbackActive(id);
    }
  };
  return (
    <Nav tabs className="search-list border-tab">
      {navData.map((data, index) => (
        <NavItem key={index}>
          <NavLink className={activeTab === index + 1 ? "active" : ""} onClick={() => handleTab(data.id)}>
            {data.icon}
            {data.tittle}
          </NavLink>
          <div className="material-border"></div>
        </NavItem>
      ))}
    </Nav>
  );
};
export default SearchTabs;
