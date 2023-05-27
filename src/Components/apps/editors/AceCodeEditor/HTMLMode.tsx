import AceEditor from "react-ace";
import { Card, CardBody, Col } from "reactstrap";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { HTMLModeHeading } from "../../../../Constant";
import { HtmlData } from "../../../../Data/apps/editor/AceCodeEditorData";

const HtmlMode = () => {
  return (
    <Col xl="6">
      <Card>
        <HeadingCommon Heading={HTMLModeHeading} />
        <CardBody>
          <AceEditor
            className="aceEditor w-auto"
            mode="html"
            theme="monokai"
            value={HtmlData}
            name="blah2"
            fontSize={14}
            setOptions={{ useWorker: false }}
            showPrintMargin={true}
            showGutter={true}
            editorProps={{ $blockScrolling: true }}
            highlightActiveLine={true}
          />
        </CardBody>
      </Card>
    </Col>
  );
};
export default HtmlMode;
