import React, { Fragment, useState } from "react";
import { Btn } from "../../../../AbstractElements";
import CommonModal from "../../../../Common/modal";

const BasicBtn = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Fragment>
      <Btn color="primary" onClick={toggle}>
        Simple
      </Btn>
      <CommonModal isOpen={modal} title="ModalTitle" toggler={toggle}>
        ....
      </CommonModal>
    </Fragment>
  );
};

export default BasicBtn;
