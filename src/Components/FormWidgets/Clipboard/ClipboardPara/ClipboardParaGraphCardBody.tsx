import { useState } from "react";
import { CardBody } from "reactstrap";
import CopyToClipboard from "react-copy-to-clipboard";
import { Copy, CopyFromParagraph } from "../../../../Constant";
import { Btn,H6,P } from "../../../../AbstractElements";

const ClipboardParaGraphCardBody = () => {
  const clipBoardParaGraph ="Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const [clipBoardValues, setClipBoardValues] = useState({ value: clipBoardParaGraph, copied: false,});

  return (
    <CardBody>
      <div className="clipboaard-container">
        <P className="card-description">{CopyFromParagraph}</P>
        <CopyToClipboard text={clipBoardValues.value} onCopy={(value) => setClipBoardValues({ value, copied: true })}>
          <H6 className="border rounded card-body f-w-300">{clipBoardParaGraph}</H6>
        </CopyToClipboard>
        <div className="mt-3">
          <CopyToClipboard text={clipBoardValues.value} onCopy={(value) => setClipBoardValues({ value, copied: true })}>
            <Btn className="btn-clipboard" color="primary"><i className="fa fa-copy"></i> {Copy}</Btn>
          </CopyToClipboard>
        </div>
      </div>
    </CardBody>
  );
};
export default ClipboardParaGraphCardBody;
