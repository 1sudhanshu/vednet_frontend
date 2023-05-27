import { Fragment, useState } from "react";
import { Btn } from "../../../../AbstractElements";
import FormModal from "./FormModal";

export interface propsTypes {
  btnText?: string;
  defaultVal?: string;
}

const VaryingModalButton = ({ btnText, defaultVal }: propsTypes) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  return (
    <Fragment>
      <Btn color="primary" onClick={toggle}>
        {btnText}
      </Btn>
      <FormModal
        sendMessage="send Message"
        modal={modal}
        NewMessage="NewMessage"
        toggle={toggle}
        defaultVal={defaultVal}
      />
    </Fragment>
  );
};

export default VaryingModalButton;
