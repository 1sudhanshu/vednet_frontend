import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import GeneralWidgetsContainer from "../../../Components/Widgets/GeneralWidgets";

const GeneralWidgets = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Widgets" title="General Widget" />
      <GeneralWidgetsContainer />
    </div>
  );
};

export default GeneralWidgets;
