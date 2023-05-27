import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import PaginationContainer from "../../../Components/BounsUi/Pagination";
const Pagination = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="BounsUi" title="Pagination" />
        <PaginationContainer />
      </div>
    </Fragment>
  );
};

export default Pagination;
