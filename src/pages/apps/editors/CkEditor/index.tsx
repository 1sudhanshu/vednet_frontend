import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import CkEditorContainer from '../../../../Components/apps/editors/CkEditor/index';

const CkEditor = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Editors" title="Ck Editor" />
      <CkEditorContainer />
    </div>
  );
};

export default CkEditor;
