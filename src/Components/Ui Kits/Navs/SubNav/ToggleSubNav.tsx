import { Col } from "reactstrap";
import { useState } from "react";
import { Btn, H5, LI, UL } from "../../../../AbstractElements";
import { TogleSubNavArr } from "../../../../Data/Components/UiKits/Navs";

const ToggleSubNav = () => {
  const [togleNav, setTogleNav] = useState(1);
  const toggleHandle = (i: number) => {
    setTogleNav((prev: number) => (prev === i ? 0 : i));
  };
  return (
    <Col lg="6" className="nav-md-mt">
      <div>
        <H5>Toggle Sub Nav</H5>
      </div>
      <UL className="icon-lists border navs-icon default-according style-1 simple-list">
        {TogleSubNavArr.map((data, index) => (
          <LI key={index}>
            {data.children ? (
              <>
                <Btn
                  aria-expanded={togleNav === index ? true : false}
                  color="deafult"
                  className={
                    togleNav === index
                      ? "btn-link text-muted active"
                      : "collapsed  btn-link text-muted active"
                  }
                  onClick={() => toggleHandle(index)}
                >
                  {data.logo}
                  <span> {data.tittle}</span>
                </Btn>
              </>
            ) : (
              <a href="#javascript">
                {data.logo} <span> {data.tittle}</span>
              </a>
            )}
            {data?.children && (
              <UL className={`collapse simple-list ${togleNav === index ? "show" : ""}`}>
                {data.children.map((data, index2) => (
                  <LI key={index2} className="pl-navs-inline">
                    <a href="#javacripts">
                      <i className="fa fa-angle-right"></i>
                      {data}
                    </a>
                  </LI>
                ))}
              </UL>
            )}
          </LI>
        ))}
      </UL>
    </Col>
  );
};
export default ToggleSubNav;
