import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import MasonryGalleryWithDescriptionContainer from "../../../../Components/apps/Gallery/MasonryGalleryWithDescription/index";

const MasonryGalleryWithDescription = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Gallery" title="Masonry Gallery With Description" />
      <MasonryGalleryWithDescriptionContainer />
    </div>
  );
};

export default MasonryGalleryWithDescription;
