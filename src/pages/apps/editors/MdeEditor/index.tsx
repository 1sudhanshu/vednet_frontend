import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import MdeEditorContainer from "../../../../Components/apps/editors/MdeEditor/index";

const MdeEditor = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Editors" title="MdeEditor" />
      <MdeEditorContainer />
    </div>
  );
};

export default MdeEditor;
