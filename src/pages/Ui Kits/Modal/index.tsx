import{ Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import ModalContainer from "../../../Components/Ui Kits/Modal";
const Modal = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Ui Kits" title="Modal" />
        <ModalContainer />
      </div>
    </Fragment>
  );
};

export default Modal;
