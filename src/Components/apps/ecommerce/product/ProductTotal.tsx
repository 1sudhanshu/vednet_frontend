import { H6, LI, UL } from "../../../../AbstractElements";
import Sorting from "./Sorting";
import { Grid, List } from "react-feather";
import { Col, Row } from "reactstrap";
import { Filters, Href } from "../../../../Constant";
import { useDispatch } from "react-redux";
import { productFilterData } from '../../../../Data/apps/ecommerce/ProductPage';

const ProductTotal = () => {
  const dispatch = useDispatch();
  const onClickFilter = () => {dispatch({ type: "setIsFilter" });};
  const gridLayout = () => {dispatch({ type: "setListView", payload: false });dispatch({ type: "setColClassName", payload: 3 });};
  const listLayout = () => dispatch({ type: "setListView", payload: true });
  const LayoutView = (layoutColumns: number) =>dispatch({ type: "setColClassName", payload: layoutColumns });

  return (
      <Row >
        <Col md="6" className="products-total">
          <div className="square-product-setting d-inline-block">
            <a className="icon-grid grid-layout-view" onClick={gridLayout} href="#javascript"><Grid /></a>
          </div>
          <div className="square-product-setting d-inline-block">
            <a className="icon-grid m-0 list-layout-view" onClick={listLayout} href="#javascript"><List /></a>
          </div>
          <span className="d-none-productlist filter-toggle" onClick={onClickFilter}>
            <H6 className= "mb-0" >{Filters}
              <span className="ms-2">
                <i className="toggle-data fa fa-chevron-down"></i>
              </span>
            </H6>
          </span>
          <div className="grid-options d-inline-block">
            <UL  className= "simple-list" >
              {productFilterData.map((data,index)=>
              <LI key={index}>
                <a className="product-2-layout-view" onClick={() => LayoutView(data.id)} href={Href}>
                  {data.filterData.map((item,index2)=><span key={index2} className={`line-grid line-grid-${item} bg-primary`}></span>)}                  
                </a>
              </LI>)}
            </UL>
          </div>
        </Col>
        <Sorting />
      </Row>
  );
};
export default ProductTotal;
