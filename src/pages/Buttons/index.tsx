import { Fragment } from "react";
import ButtonsContainer from "../../Components/Buttons";
import Breadcrumbs from "../../CommonElements/Breadcrumbs";
const Buttons = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="DashBoard" title="Business Dashboard" />
        <ButtonsContainer />
      </div>
    </Fragment>
  );
};

export default Buttons;