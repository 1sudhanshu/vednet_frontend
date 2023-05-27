import  {   useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router';
import { Row, Card } from 'reactstrap';
import { H6, LI, P, Image, UL, Btn } from '../../../../AbstractElements';
import ProductModal from './ProductModal';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { EcommerceRootState, productItemInterface } from '../ReducerTypes';
import { getVisibleproducts } from '../../../../Service/Ecommerce.service';
import { dynamicImage } from '../../../../Service';

const ProductGrid = () => {
  const {productItem,symbol } = useSelector((state:EcommerceRootState) => state.ProductReducer);
  const {colClassName,listView,filter } = useSelector((state:EcommerceRootState) => state.FilterReducer);
  const [dataid, setDataid] = useState<undefined | number>();
  const [openModal, setOpenModal] = useState(false);
  const history = useNavigate();
  const onClickHandle = (i:productItemInterface) => {
    setOpenModal(true);
    setDataid(i.id);
  };
  const dispatch =useDispatch()
  const AddToCarts = (item:productItemInterface, quantity:number) => {
    dispatch({ type: "addToCart", payload: {item, quantity} });
    history(`${process.env.PUBLIC_URL}/ecommerce/cart`);
  };
  const products = getVisibleproducts(productItem, filter);

  return (
      <div className={`product-wrapper-grid ${listView ?"list-view":""}`}>
        <Row className="gridRow">
          {products && products.map((item:productItemInterface,i:number) => 
            (
              <div className={`${listView?"col-xl-3 col-sm-6 xl-4 col-xl-12":` col-xl-${colClassName}  col-sm-6`}`} key={i}>
                <Card >
                  <div className="product-box">
                    <div className="product-img">
                      {(item.status !== "none") &&
                        <div className={item.ribbonClassName}>
                          {item.status}
                        </div>}
                      <Image  className= 'img-fluid' src= {dynamicImage(item.img)} alt= ''  />
                      <div className="product-hover">
                        <UL className= 'simple-list d-flex flex-row' >
                          <LI><Btn color= 'transprant'   onClick= {() => AddToCarts(item, 1) }><i className="icon-shopping-cart"></i></Btn></LI>
                          <LI><Btn color= 'transprant' onClick= {() => onClickHandle(item)} ><i className="icon-eye" ></i></Btn></LI>
                          <LI><Btn color= 'transprant' onClick={()=>history(`${process.env.PUBLIC_URL}/ECommerce/Wishlist`)}><i className="icon-heart"></i></Btn></LI>
                        </UL>
                      </div>
                    </div>
                    <div className="product-details">
                      <Link to={`${process.env.PUBLIC_URL}/ECommerce/ProductPage/1`}><H6>{item.name}</H6></Link>
                      <P>{item.note}</P>
                      <div className="product-price">{symbol}{item.price}&nbsp;
                        <del>{symbol}{item.discountPrice}</del>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            )
          )}
          {openModal && <ProductModal value={openModal} setOpenModal={setOpenModal} dataid={dataid} />}
        </Row>
      </div>
  );
};
export default ProductGrid;