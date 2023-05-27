import { Btn, H5, LI, UL } from "../../../../AbstractElements";
import { NavsExampleDatas } from "../../../../Data/Components/UiKits/Navs/DropDownExample";

const DropdownExample = () => {
  return (
    <div className="onhover-dropdown navs-dropdown">
      <Btn color="primary" className="onhover-dropdown">
        Dropdown example <i className="icon-arrow-down"></i>
      </Btn>
      <div className="onhover-show-div">
        <UL className="icon-lists navs-icon simple-list">
          {NavsExampleDatas.map((data, index) => (
            <LI className={data.className} key={index}>
              {data.Heading && <H5 className="mb-0">{data.Heading}</H5>}
              {data.Tittle && (
                  <a href="#javascripts">
                    {data.icon}
                    <span> {data.Tittle}</span>
                  </a>
              )}
              {data.button && (
                <Btn color="deafult" className=" btn-pill btn-outline-primary">
                  Log Out
                </Btn>
              )}
            </LI>
          ))}
        </UL>
      </div>
    </div>
  );
};

export default DropdownExample;
