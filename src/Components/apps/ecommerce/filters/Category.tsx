import { Fragment } from "react";
import { H6 } from "../../../../AbstractElements";
import { Categorys, Price } from "../../../../Constant";
import Rangeslider from "./Rangeslider";
import GenderFilter from "./GenderFilter";
import BrandFilter from "./BrandFilter";
import ColorsFilter from "./ColorsFilter";

const Category = () => {
  return (
    <Fragment>
      <div className="product-filter">
        <H6 className="f-w-600">{Categorys}</H6>
        <GenderFilter />
      </div>
      <BrandFilter />
      <ColorsFilter />
      <div className="product-filter pb-0">
        <H6 className="f-w-600">{Price}</H6>
        <Rangeslider />
      </div>
    </Fragment>
  );
};

export default Category;
