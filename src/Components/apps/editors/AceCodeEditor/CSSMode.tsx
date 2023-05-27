import { Card, CardBody, Col } from "reactstrap";
import AceEditor from "react-ace";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { CSSModeHeading } from "../../../../Constant";
import { CssData } from "../../../../Data/apps/editor/AceCodeEditorData";

const CssMode = () => {
  return (
      <Col xl="6">
        <Card>
          <HeadingCommon Heading={CSSModeHeading} />
          <CardBody>
            <AceEditor
              className="aceEditor w-auto"
              mode="css"
              theme="monokai"
              value={CssData}
              name="blah2"
              setOptions={{ useWorker: false }}
              fontSize={14}
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
export default CssMode;
