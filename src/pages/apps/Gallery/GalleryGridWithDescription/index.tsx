import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import GalleryGridWithDescriptionContainer from "../../../../Components/apps/Gallery/GalleryGridWithDescription/index";

const GalleryGridWithDescription = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Gallery" title="GalleryGridWithDescription" />
      <GalleryGridWithDescriptionContainer />
    </div>
  );
};

export default GalleryGridWithDescription;
