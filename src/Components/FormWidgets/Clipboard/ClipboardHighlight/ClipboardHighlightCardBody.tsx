import { useState } from "react";
import { CardBody } from "reactstrap";
import { H6,P,Btn } from "../../../../AbstractElements";
import CopyToClipboard from "react-copy-to-clipboard";
import { ClipBoardCopy, CopyHighLightedText, Highlight } from "../../../../Constant";

const ClipboardHighlightCardBody = () => {
  const [highlightTextValue, setHighlightTextValue] = useState({value: "dolor ertrsiertertt amet",copied: false,});
  return (
    <CardBody>
      <div className="clipboaard-container">
        <P className="card-description">{ClipBoardCopy}</P>
        <H6 className="border rounded card-body f-w-300">Lorem ipsum <span className="bg-primary text-white p-1">{Highlight}</span>,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</H6>
        <div className="mt-3">
          <CopyToClipboard text={highlightTextValue.value} onCopy={(value) => setHighlightTextValue({ value, copied: true })}>
            <Btn className="btn-clipboard" color="primary">
              <i className="fa fa-copy"></i> {CopyHighLightedText}
            </Btn>
          </CopyToClipboard>
        </div>
      </div>
    </CardBody>
  );
};

export default ClipboardHighlightCardBody;
