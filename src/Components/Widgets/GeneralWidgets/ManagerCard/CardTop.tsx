import { CardHeader } from "reactstrap";
import { Image } from "../../../../AbstractElements";
import { Fragment } from "react";

const CardTop = () => {
  const images = require.context("../../../../assets/images", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };

  return (
    <Fragment>
      <CardHeader>
        <Image
          className="img-fluid"
          src={dynamicImage("user-card/3.jpg")}
          alt="Background"
        />
      </CardHeader>
      <div className="card-profile">
        <Image
          body={true}
          className="rounded-circle"
          src={dynamicImage("avtar/3.jpg")}
          alt="manager"
        />
      </div>
    </Fragment>
  );
};

export default CardTop;
