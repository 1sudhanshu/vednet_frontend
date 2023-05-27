import  { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import BreadcrumbContainer from "../../../Components/BounsUi/Breadcrumb";
const Breadcrumb = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Uikits" title="Bread Crumb" />
        <BreadcrumbContainer />
    
      </div>
    </Fragment>
  );
};

export default Breadcrumb;
