import { H4, P } from "../../../../AbstractElements";
import { Gallery, Item } from "react-photoswipe-gallery";
import { imagePath } from "../../../../Data/apps/Gallery";
import { Href, Imagedesc, PortfolioTitle } from "../../../../Constant";

const GalleryImageDesc = () => {
  return (
    <Gallery>
      {imagePath &&
        imagePath.map((item, index) => (
          <figure key={index} className="col-xl-3 col-sm-6 box-col-25">
            <Item
              original={require(`../../../../assets/images/${item}`)}
              width="1024"
              height="768"
              caption="hello"
            >
              {({ ref, open }) => (
                <a href={Href} onClick={open}>
                  <img
                    className="img-thumbnail"
                    ref={ref as React.MutableRefObject<HTMLImageElement>}
                    src={require(`../../../../assets/images/${item}`)}
                    alt="thumbnail"
                  />
                  <div className="caption">
                    <H4>{PortfolioTitle}</H4>
                    <P>{Imagedesc}</P>
                  </div>
                </a>
              )}
            </Item>
          </figure>
        ))}
    </Gallery>
  );
};

export default GalleryImageDesc;
