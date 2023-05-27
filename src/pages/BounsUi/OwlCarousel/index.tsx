import { Fragment } from "react";
import Breadcrumbs from "../../../CommonElements/Breadcrumbs";
import OwlCarouselContainer from "../../../Components/BounsUi/OwlCarousel";
const OwlCarousel = () => {
  return (
    <Fragment>
      <div className="page-body">
        <Breadcrumbs parent="BounsUi" title="Owl Carousel" />
        <OwlCarouselContainer />
      </div>
    </Fragment>
  );
};

export default OwlCarousel;
