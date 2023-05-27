import { Btn, LI, UL } from "../../../../AbstractElements";
import { deafultNavData } from "../../../../Data/Components/UiKits/Navs";

const OnHoverDropDown = () => {
  return (
    <div className="onhover-dropdown navs-dropdown">
      <Btn color="primary" className="onhover-dropdown">Dropdown example <i className="icon-arrow-down"></i></Btn>
      <div className="onhover-show-div">
        <UL className="simple-list icon-lists navs-icon">
          {deafultNavData.map((data, index) => (
            <LI key={index}>
              <a href="#javascript">
                {data.logo}
                <span>{data.tittle}</span>
              </a>
            </LI>
          ))}
        </UL>
      </div>
    </div>
  );
};
export default OnHoverDropDown;
