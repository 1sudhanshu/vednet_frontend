import Breadcrumbs from "../../../CommonElements/Breadcrumbs/index";
import ClipboardContainer from "../../../Components/FormWidgets/Clipboard";

const Clipboard = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Form Widgets" title="Clipboard" />
      <ClipboardContainer />
    </div>
  );
};

export default Clipboard;
