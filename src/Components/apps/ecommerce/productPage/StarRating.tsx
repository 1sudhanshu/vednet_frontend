import { Fragment, useState } from "react";
import {  H5 } from "../../../../AbstractElements";
import {ProductReview,ProductTittle,} from "../../../../Constant";
import { Rating } from "react-simple-star-rating";

const StarRatings = () => {
  const [rating, setRating] = useState(1);
  const changeRating = (newRating: number) => {
    setRating(newRating);
  };
  return (
    <Fragment>
      <div className="product-page-details">
        <H5>{ProductTittle}</H5>
        <div className="d-flex">
          <div className="rating">
            <Rating
              onClick={changeRating}
              initialValue={rating}
              size={17}
              style={{ padding: "0" }}
            />
          </div>
          <span>{ProductReview}</span>
        </div>
      </div>
      <hr />
    </Fragment>
  );
};
export default StarRatings;
