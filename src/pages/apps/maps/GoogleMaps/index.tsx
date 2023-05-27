import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import GoogleMapsContainer from "../../../../Components/apps/maps/GoogleMaps/index";

const GoogleMaps = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Maps" title="GoogleMaps" />
      <GoogleMapsContainer />
    </div>
  );
};

export default GoogleMaps;
