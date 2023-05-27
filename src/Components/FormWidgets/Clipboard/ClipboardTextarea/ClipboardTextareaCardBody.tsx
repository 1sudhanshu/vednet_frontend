import { useState } from "react";
import { CardBody, Input } from "reactstrap";
import CopyToClipboard from "react-copy-to-clipboard";
import { Btn,P } from "../../../../AbstractElements";
import { Copy, Cut, CutCopyFromTextarea, clipBoardTextParagraph } from "../../../../Constant";

const ClipboardTextareaCardBody = () => {
  const [clipBoardValues, setClipBoardValues] = useState({value: clipBoardTextParagraph,copied: false,});
  return (
    <CardBody>
      <div className="clipboaard-container">
        <P className="card-description">{CutCopyFromTextarea}</P>
        <Input type="textarea" rows="1" spellCheck="false" value={clipBoardValues.value} onChange={({ target: { value } }) =>setClipBoardValues({ value, copied: false })}/>
        <div className="mt-3">
          <CopyToClipboard text={clipBoardValues.value} onCopy={(value) => setClipBoardValues({ value, copied: true })}>
            <Btn className="btn-clipboard  me-2" color="primary"><i className="fa fa-copy"></i> {Copy}</Btn>
          </CopyToClipboard>
          <CopyToClipboard text={clipBoardValues.value} onCopy={() => setClipBoardValues({ copied: true, value: "" })}>
            <Btn className="btn-clipboard-cut" color="secondary"><i className="fa fa-cut"></i> {Cut}</Btn>
          </CopyToClipboard>
        </div>
      </div>
    </CardBody>
  );
};

export default ClipboardTextareaCardBody;
