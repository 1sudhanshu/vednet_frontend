import { useSelector } from "react-redux";
import { H6, LI, UL } from "../../../../AbstractElements"
import { getColors } from "../../../../Service/Ecommerce.service";
import { EcommerceRootState } from "../ReducerTypes";
import { useDispatch } from "react-redux";
import { FormEvent, Fragment } from "react";
import { Colors } from "../../../../Constant";

const ColorsFilter = () => {
  const { productItem } = useSelector((state: EcommerceRootState) => state.ProductReducer);
  const dispatch = useDispatch();
  const colors = getColors(productItem);

  const colorHandle = (event: FormEvent<HTMLInputElement>, color: string) => {
    var elems = document.querySelectorAll(".color-selector ul li");
    [].forEach.call(elems, function (el: any) {
      el.classList.remove("active");
    });
    (event.target as Element).classList.add("active");
    dispatch({ type: "filterColor", payload: color });
  };


  return (
    <div className="product-filter slider-product">
        <H6 className="f-w-600">{Colors}</H6>
        <div className="color-selector">
          <UL className="simple-list d-flex flex-wrap flex-row">
            {colors.map((color, i:number) =>  (
                <Fragment key={i}>
                  <LI
                    className={color}
                    title={color}
                    onClick={(e: FormEvent<HTMLInputElement>) =>
                      colorHandle(e, color)
                    }
                  ></LI>
                  &nbsp;
                </Fragment>
              )
            )}
          </UL>
        </div>
      </div>
  )
}

export default ColorsFilter