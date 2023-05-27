import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import LeafletMapContainer from "../../../../Components/apps/maps/LeafletMap/index";

const LeafletMap = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Map" title="LeafletMap" />
      <LeafletMapContainer />
    </div>
  );
};

export default LeafletMap;
