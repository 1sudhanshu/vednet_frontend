import { Btn, H5, LI, UL } from "../../../../AbstractElements";
import {  NavsExampleDatas } from "../../../../Data/Components/UiKits/Navs/DropDownExample";

const SectionandSeparatorNav = () => {
  return (
    <UL className="icon-lists border navs-icon simple-list">
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
  );
};

export default SectionandSeparatorNav;
