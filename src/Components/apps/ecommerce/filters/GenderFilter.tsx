import { useSelector } from "react-redux";
import { getGender } from "../../../../Service/Ecommerce.service";
import { EcommerceRootState } from "../ReducerTypes";
import { Input, Label } from "reactstrap";
import { useDispatch } from "react-redux";

const GenderFilter = () => {
  const { productItem } = useSelector((state: EcommerceRootState) => state.ProductReducer);
  const gender = getGender(productItem);
  const dispatch = useDispatch();
  const { filter } = useSelector((state: EcommerceRootState) => state.FilterReducer);

  const ClickCategory = (e: any) => {
    if (e.target.checked === true) {
      dispatch({ type: "filterGender", payload: e.target.value });
    } else dispatch({ type: "removeGender", payload: e.target.value });
  };
  return (
    <div className="checkbox-animated mt-0">
      {gender.map((item, i) => (
        <Label className="d-block" key={i}>
          <Input className="radio_animated" defaultChecked={filter.brand.includes(item) ? true : false} type="checkbox" name="name" value={item} onClick={(e)=>ClickCategory(e)}/>
          {item}
        </Label>
      ))}
    </div>
  );
};

export default GenderFilter;
