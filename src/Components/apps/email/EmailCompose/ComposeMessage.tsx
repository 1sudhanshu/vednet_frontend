import { useState } from "react";
import { Card, Form, FormGroup, Input, Label } from "reactstrap";
import SimpleMDE from "react-simplemde-editor";
import Dropzone from "react-dropzone-uploader";
import { Btn, H4, LI, UL } from "../../../../AbstractElements";
import { Cancel, Href, Messages, NewMessage, Save, Send, Subject, To,} from "../../../../Constant";

const ComposeMessage = () => {
  const getUploadParams = () => {return {url: "https://httpbin.org/post"}};
  const [text, setText] = useState(`Enter text in the area on the left. For more info, click the ? (help) icon in the menu.`);
  const handleChange = () => {setText("Enter text in the area on the left. For more info, click the ? (help) icon in the menu.");};
  return (
    <div className="email-right-aside">
      <Card className="email-body">
        <div className="email-profile">
          <div className="email-body">
            <div className="email-compose">
              <div className="email-top compose-border">
                <div className="compose-header">
                  <H4 className="mb-0">{NewMessage}</H4>
                  <Btn color="primary"><i className="fa fa-file me-2"></i> {Save}</Btn>
                </div>
              </div>
              <div className="email-wrapper">
                <Form className="theme-form">
                  <FormGroup>
                    <Label className="col-form-label pt-0">{To}</Label>
                    <Input type="email" />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label pt-0">{Subject}</Label>
                    <Input type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label pt-0">{Messages}</Label>
                    <SimpleMDE id="editor_container" onChange={handleChange} value={text} options={{ autofocus: true, spellChecker: false}}/>
                  </FormGroup>
                  <FormGroup>
                    <Dropzone getUploadParams={getUploadParams} maxFiles={1} multiple={false} canCancel={false} inputContent="Drop files here or click to upload."/>
                  </FormGroup>
                </Form>
                <div className="action-wrapper">
                  <UL className="simple-list actions d-flex flex-row">
                    <LI> <a className="btn btn-secondary" href={Href}><i className="fa fa-paper-plane me-2"></i>{Send}</a></LI>
                    <LI> <a className="btn btn-danger" href={Href}><i className="fa fa-times me-2"></i>{Cancel}</a></LI>
                  </UL>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default ComposeMessage;
