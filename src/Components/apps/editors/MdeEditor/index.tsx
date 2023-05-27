import { Card, CardBody, Col, Row } from "reactstrap";
import HeadingCommon from "../../../../Common/HeadingCommon";
import { MdeEditorExample, MdeEditorText } from "../../../../Constant";
import { SimpleMdeReact } from "react-simplemde-editor";
import SmallEditor from "./SmallEditor";

const MdeEditorContainer = () => {
  return (
    <>
      <Row>
        <Col sm="12">
          <Card>
            <HeadingCommon Heading={MdeEditorExample} />
            <CardBody>
              <SimpleMdeReact
                id="editor_container"
                value={MdeEditorText}
                options={{ autofocus: true, spellChecker: false }}
              />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <SmallEditor />
    </>
  );
};

export default MdeEditorContainer;
