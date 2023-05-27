import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import AceCodeEditorContainer from '../../../../Components/apps/editors/AceCodeEditor/index';

const AceCodeEditor = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Editors" title="Ace Code Editor" />
      <AceCodeEditorContainer/>
    </div>
  );
};

export default AceCodeEditor;
