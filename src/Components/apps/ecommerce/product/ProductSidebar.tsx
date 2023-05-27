import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import { H6, Image } from "../../../../AbstractElements";
import { Filters } from "../../../../Constant";
import { dynamicImage } from '../../../../Service/index';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { EcommerceRootState } from "../ReducerTypes";
import PrizeRange from '../filters/PrizeRange';
import Category from '../filters/Category';
import SearchBox from "./SearchBox";

const ProductSidebar = () => {
  const {IsFilter } = useSelector((state:EcommerceRootState) => state.FilterReducer);
  const dispatch = useDispatch();
  const onClickFilter = () => {dispatch({ type: "setSideBarOn" });};

  return (
      <Row>
        <Col sm="3">
            <div className={`product-sidebar ${IsFilter ? "open" : ""}`}>
              <div className="filter-section">
                <Card>
                  <CardHeader>
                    <H6 className= "mb-0 f-w-600" >
                      {Filters}
                      <span className="pull-right"><i className="fa fa-chevron-down toggle-data" onClick={onClickFilter}></i></span>
                    </H6>
                  </CardHeader>
                  <div className="left-filter">
                    <CardBody className="filter-cards-view animate-chk">
                      <Category />
                      <PrizeRange />
                      <div className="product-filter text-center mt-2">
                        <Image className= "img-fluid banner-product m-auto" src= {dynamicImage("ecommerce/banner.jpg")} alt= ""  />
                      </div>
                    </CardBody>
                  </div>
                </Card>
              </div>
            </div>
        </Col>
        <SearchBox/>
      </Row>
  );
};
export default ProductSidebar;
