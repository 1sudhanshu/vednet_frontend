import { Gallery, Item } from "react-photoswipe-gallery";
import { Href } from "../../../../Constant";
import { imagePath } from "../../../../Data/apps/Gallery";

const GalleryImages = () => {

  return (
    <Gallery>
      {imagePath &&
        imagePath.map((item, i) =>  (
            <figure className="col-xl-3 col-md-4 col-sm-6 box-col-33" key={i}>
              <Item
                original={require(`../../../../assets/images/${item}`)}
                width="1024"
                height="768"
              >
                {({ ref, open }) => (
                  <a href={Href} onClick={open}>
                    <img
                      className="img-thumbnail"
                      ref={ref as React.MutableRefObject<HTMLImageElement>}
                      src={require(`../../../../assets/images/${item}`)}
                      alt=""
                    />
                  </a>
                )}
              </Item>
            </figure>
          )
        )}
    </Gallery>
  );
};

export default GalleryImages;
