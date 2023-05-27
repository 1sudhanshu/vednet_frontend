import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import MasonryGalleryContainer from "../../../../Components/apps/Gallery/MasonryGallery/index";

const MasonryGallery = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Gallery" title="MasonryGallery" />
      <MasonryGalleryContainer />
    </div>
  );
};

export default MasonryGallery;
