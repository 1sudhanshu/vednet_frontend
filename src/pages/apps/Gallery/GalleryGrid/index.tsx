import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import GalleryGridContainer from '../../../../Components/apps/Gallery/GalleryGrid/index';

const GalleryGrid = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Gallery" title="GalleryGrid" />
      <GalleryGridContainer />
    </div>
  );
};

export default GalleryGrid;
