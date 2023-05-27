import{ Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import SpinnersContainer from "../../../Components/Ui Kits/Spinners";
const Spinners = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Ui Kits" title="Spinners" />
        <SpinnersContainer />
      </div>
    </Fragment>
  );
};

export default Spinners;
