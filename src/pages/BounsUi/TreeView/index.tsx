import  { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import TreeViewContainer from "../../../Components/BounsUi/TreeView";
const TreeView = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Bouns Ui" title="Tree View" />
        <TreeViewContainer />
      </div>
    </Fragment>
  );
};

export default TreeView;
