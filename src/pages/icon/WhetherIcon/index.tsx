import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import WhetherIconContainer from "../../../Components/icon/WhetherIcon";
const WhetherIcon = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Icons" title="Whether Icon" />
        <WhetherIconContainer />
      </div>
    </Fragment>
  );
};

export default WhetherIcon;
