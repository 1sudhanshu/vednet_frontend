import { useDispatch } from "react-redux";
import { H6 } from "../../../../AbstractElements";
import { Brand } from "../../../../Constant";
import { useSelector } from "react-redux";
import { getBrands } from "../../../../Service/Ecommerce.service";
import { EcommerceRootState } from "../ReducerTypes";
import { Input, Label } from "reactstrap";

const BrandFilter = () => {
  const { productItem } = useSelector(
    (state: EcommerceRootState) => state.ProductReducer
  );

  const brands = getBrands(productItem);
  const { filter } = useSelector(
    (state: EcommerceRootState) => state.FilterReducer
  );
  const dispatch = useDispatch();

  const clickBrandHendle = (event: any, category: string[]) => {
    var index = brands.indexOf(event.target.value);
    if (event.target.checked === true)
      dispatch({ type: "addNewBrand", payload: event.target.value });
    else dispatch({ type: "removeBrand", payload: { index, category } });
  };

  return (
    <div className="product-filter">
      <H6 className="f-w-600">{Brand}</H6>
      <div className="checkbox-animated mt-0">
        {brands.map((brand, index) => (
          <Label className="d-block" key={index}>
            <Input
              className="checkbox_animated"
              onClick={(e) => clickBrandHendle(e, filter.category)}
              value={brand}
              defaultChecked={filter.brand.includes(brand) ? true : false}
              type="checkbox"
            />
            {brand}
          </Label>
        ))}
      </div>
    </div>
  );
};

export default BrandFilter;
