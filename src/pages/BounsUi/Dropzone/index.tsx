import  { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import DropzoneContainer from "../../../Components/BounsUi/Dropzone";
const Dropzone = () => {
  return (
    <Fragment>
      <div className="page-body">
      <Breadcrumbs parent="BounsUi" title="Dropzone" />
      <DropzoneContainer />
      </div>
    </Fragment>
  );
};

export default Dropzone;
