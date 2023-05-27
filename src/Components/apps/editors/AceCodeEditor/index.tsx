import { Row } from "reactstrap";
import JavascriptMode from "./JavascriptMode";
import HtmlMode from "./HTMLMode";
import CssMode from "./CSSMode";
import JavaMode from "./Java";

const AceCodeEditorContainer = () => {
  return (
    <Row>
      <JavascriptMode />
       <HtmlMode /> 
      <CssMode /> 
      <JavaMode /> 
    </Row>
  );
};

export default AceCodeEditorContainer;
