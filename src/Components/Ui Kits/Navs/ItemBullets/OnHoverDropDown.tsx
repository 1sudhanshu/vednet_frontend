import { Btn, LI, UL } from "../../../../AbstractElements";
import { ItemBulletsNavData } from "../../../../Data/Components/UiKits/Navs";

const OnHoverDropDown = () => {
  return (
    <div className="onhover-dropdown navs-dropdown">
      <Btn className="onhover-dropdown" color="primary">
        Dropdown example <i className="icon-arrow-down"></i>
      </Btn>
      <div className="onhover-show-div">
        <div className="nav-list">
          <UL className="nav-list-disc simple-list">
            {ItemBulletsNavData.map((data, index) => (
              <LI key={index}>
                <a href="#javascript">
                  <i className="fa fa-angle-right"></i>
                  <span> {data.tittle}</span>
                </a>
              </LI>
            ))}
          </UL>
        </div>
      </div>
    </div>
  );
};

export default OnHoverDropDown;
