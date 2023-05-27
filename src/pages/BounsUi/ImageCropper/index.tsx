import  { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import ImageCropperContainer from "../../../Components/BounsUi/ImageCropper";
const ImageCropper = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Uikits" title="Image Cropper" />
        <ImageCropperContainer />
      </div>
    </Fragment>
  );
};

export default ImageCropper;
