import  { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import RangeSliderContainer from "../../../Components/BounsUi/RangeSlider";
const RangeSlider = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="Uikits" title="Range Slider" />
        <RangeSliderContainer />
      </div>
    </Fragment>
  );
};

export default RangeSlider;
