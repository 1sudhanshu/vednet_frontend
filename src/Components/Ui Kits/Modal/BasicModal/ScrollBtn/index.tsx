import { Fragment, useState } from "react";
import { Btn, P } from "../../../../../AbstractElements";
import CommonModal from "../../../../../Common/modal";
import DynamicModal from "./DynamicModal";

const ScrollBtn = () => {
  const [scrollingmodal, setscrollingModal] = useState(false);
  const Scrollmodaltoggle = () => setscrollingModal(!scrollingmodal);
  return (
    <Fragment>
      <Btn color="primary" onClick={Scrollmodaltoggle}>
        ScrollingLongContent
      </Btn>
      <CommonModal isOpen={scrollingmodal} title="ModalTitle" toggler={Scrollmodaltoggle}>
          <P>Cras mattis consectetur purus sit amet fermentum. Cras justo odio,dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta acconsectetur ac, vestibulum at eros.</P>
          <P>Praesent commodo cursus magna, vel scelerisque nisl consectetur et.Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</P>
          <P>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursusmagna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donecullamcorper nulla non metus auctor fringilla.</P>
          <DynamicModal/>
      </CommonModal>
    </Fragment>
  );
};

export default ScrollBtn;
