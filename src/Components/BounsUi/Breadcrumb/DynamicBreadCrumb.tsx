import { Fragment } from "react";
import { LI, OL } from "../../../AbstractElements";

const DynamicBreadCrumb = () => {
  let data = [
    { olClass: "m-b-30 bg-secondary" },
    { olClass: "m-b-30 bg-success" },
    { olClass: "m-b-30 bg-info" },
    { olClass: "m-b-30 bg-warning" },
    { olClass: "m-b-30 bg-danger" },
    { olClass: "m-b-30 bg-light", texClass: "txt-dark" },
    { olClass: "m-b-0 bg-dark" },
  ];
  return (
    <Fragment>
      {data.map((colour, index) => (
        <OL
          key={index}
          className={`breadcrumb breadcrumb-colored ${colour.olClass}`}
          style={{ padding: "0.75rem 1rem", borderRadius: "0.25rem" }}
        >
          <LI className="breadcrumb-item">
            <a href="#javascript" className={colour?.texClass}>
              Home
            </a>
          </LI>
          <LI className={`breadcrumb-item active ${colour?.texClass}`}>
            Library
          </LI>
        </OL>
      ))}
    </Fragment>
  );
};

export default DynamicBreadCrumb;
