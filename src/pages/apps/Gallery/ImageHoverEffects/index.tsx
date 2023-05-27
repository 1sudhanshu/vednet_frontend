import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import ImageHoverEffectsContainer from '../../../../Components/apps/Gallery/ImageHoverEffects/index';

const ImageHoverEffects = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="Gallery" title="ImageHoverEffects" />
      <ImageHoverEffectsContainer />
    </div>
  );
};

export default ImageHoverEffects;
