import React, { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { JavaModeHeading } from "../../../../Constant";
import { Typescript } from "../../../../Data/apps/editor/AceCodeEditorData";

const JavaMode = () => {
  return (
    <Fragment>
      <Col xl="6">
        <Card>
          <HeadingCommon Heading={JavaModeHeading} />
          <CardBody>
            <AceEditor
              className="aceEditor w-auto"
              mode="java"
              theme="monokai"
              value={Typescript}
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
    </Fragment>
  );
};
export default JavaMode;
