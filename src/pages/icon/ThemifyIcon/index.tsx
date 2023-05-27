import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import ThemifyIconContainer from "../../../Components/icon/ThemifyIcon";
const ThemifyIcon = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Icons" title="ThemifyIcon" />
        <ThemifyIconContainer />
      </div>
    </Fragment>
  );
};

export default ThemifyIcon;
