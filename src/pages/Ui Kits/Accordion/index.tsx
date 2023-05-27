import React, { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import AccordionContainer from "../../../Components/Ui Kits/Accordion";
const Accordion = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Uikits" title="Accordion" />
        <AccordionContainer />
      </div>
    </Fragment>
  );
};

export default Accordion;
