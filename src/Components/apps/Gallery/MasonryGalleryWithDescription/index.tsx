import { Card, CardBody } from 'reactstrap';
import HeadingCommon from "../../../../Common/HeadingCommon";
import Masonry from 'react-masonry-css';
import { masonryImageData } from "../../../../Data/apps/Gallery";
import { H4, Image, LI, P } from "../../../../AbstractElements";
import { Href, Imagedesc, PortfolioTitle } from "../../../../Constant";

const MasonryGalleryWithDescriptionContainer = () => {
  const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    700: 2,
    500: 1,
  };
  const styles = { width: '100%' };
  return (
    <Card>
      <HeadingCommon Heading="MASONRY GALLERY WITH DESCRIPTION" />
      <CardBody className="photoswipe-pb-responsive">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid masonry-with-dec my-gallery gallery-with-description row grid"
        columnClassName="col-xl-3 col-sm-6 col-md-4 grid-item"
      >
        {masonryImageData.map((element, index) => (
          <LI style={{ listStyle: "none" }} key={index} className="p-0">
            <figure>
              <a href={Href} data-size="1600x950">
                <Image
                  src={require(`../../../../assets/images/${element.src}`)}
                  style={styles}
                  alt=""
                />
                <div className="caption">
                  <H4>{PortfolioTitle}</H4>
                  <P>{Imagedesc}</P>
                </div>
              </a>
            </figure>
          </LI>
        ))}
      </Masonry>
    </CardBody>
    </Card>
  );
};

export default MasonryGalleryWithDescriptionContainer;