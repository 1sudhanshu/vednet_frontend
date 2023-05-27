import { Btn, LI, UL } from "../../../../AbstractElements";
import { ACtivNavData } from "../../../../Data/Components/UiKits/Navs";

const OnHoverDropDown = () => {
  return (
    <div className="onhover-dropdown navs-dropdown">
      <Btn color="primary" className=" onhover-dropdown">
        Dropdown example <i className="icon-arrow-down"></i>
      </Btn>
      <div className="onhover-show-div">
        <UL className="icon-lists border navs-icon simple-list">
          {ACtivNavData.map((data, index) => (
            <LI key={index}>
              <a href="#javascripts" className={data?.aClassName}>
                {data.logo}
                <span> {data.tittle}</span>
              </a>
            </LI>
          ))}
        </UL>
      </div>
    </div>
  );
};

export default OnHoverDropDown;
