import { useState } from "react";
import { CardBody, Input } from "reactstrap";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Btn,P } from "../../../../AbstractElements";
import { Copy, Cut, CutcopyFromTextInput } from "../../../../Constant";

const ClipboardTextCardBody = () => {
  const [clipboardTextValue, setClipboardTextValue] = useState({ value: "", copied: false,});
  return (
    <CardBody>
      <div className="clipboaard-container">
        <P className="card-description">{CutcopyFromTextInput}</P>
        <Input type="text" placeholder="type some text to copy / cut" value={clipboardTextValue.value} onChange={({ target: { value } }) =>setClipboardTextValue({ value, copied: false })}/>
        <div className="mt-3">
          <CopyToClipboard text={clipboardTextValue.value} onCopy={(value) => setClipboardTextValue({ value, copied: true })}>
            <Btn className="btn-clipboard me-2" color="primary"><i className="fa fa-copy"></i> {Copy}</Btn>
          </CopyToClipboard>
          <CopyToClipboard text={clipboardTextValue.value} onCopy={() => setClipboardTextValue({ copied: true, value: "" })}>
            <Btn className="btn-clipboard-cut" color="secondary"><i className="fa fa-cut"></i> {Cut}</Btn>
          </CopyToClipboard>
        </div>
      </div>
    </CardBody>
  );
};

export default ClipboardTextCardBody;
