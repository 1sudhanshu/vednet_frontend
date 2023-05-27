import { ChangeEvent, useEffect, useState } from "react";
import { Btn, H4, H6, Image, LI, P, UL } from "../../../../AbstractElements";
import {ProductDetails,Quantity,AddToCart,ViewDetails,ProductSizeArray,} from "../../../../Constant";
import {Modal,Col,InputGroup,InputGroupText,Input,Row,ModalHeader,} from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { EcommerceRootState, productItemInterface } from "../ReducerTypes";
import { useDispatch, useSelector } from "react-redux";
import { dynamicImage } from "../../../../Service";
interface ProductModalInterface {
  value: boolean;
  setOpenModal: (value: boolean) => void;
  dataid: undefined | number;
}
const ProductModal = ({value,setOpenModal,dataid,}: ProductModalInterface) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(value);
  const { productItem, symbol } = useSelector((state: EcommerceRootState) => state.ProductReducer);
  const [quantity, setQuantity] = useState(1);
  const [singleProduct, setSingleProduct] = useState<productItemInterface | undefined | [] | any>([]);
  useEffect(() => {
    productItem.forEach((product: productItemInterface) => {
      if (product.id === dataid) {
        setSingleProduct(product);
      }
    });
  }, [productItem, dataid]);
  const changeQty = (e: ChangeEvent<HTMLInputElement>) => setQuantity(parseInt(e.target.value))
  const plusQty = () => {   if (quantity >= 1) {setQuantity(quantity + 1);}};
  const minusQty = () => {  if (quantity > 1) {setQuantity(quantity - 1);}};
  const onCloseModal = () => { setOpen(false); setOpenModal(false);};
  const dispatch = useDispatch();
  const AddToCarts = (item: productItemInterface) => {
    dispatch({ type: "addToCart", payload: { item, quantity } });
    navigate(`${process.env.PUBLIC_URL}/ECommerce/Cart`);
  };

  return (
    <Modal className="product-box" toggle={onCloseModal} size="lg" centered={true} isOpen={open}>
      <ModalHeader toggle={onCloseModal}>
        <Row className="product-box">
          <Col md="6" className="product-img">
            <Image alt="image" className="img-fluid" src={singleProduct.img ? dynamicImage(singleProduct.img) : ""}/>
          </Col>
          <Col md="6" className="product-details text-start">
            <H4>{singleProduct.category}</H4>
            <div className="product-price">
              <del>{symbol}{singleProduct.discountPrice}</del>
              {symbol}{singleProduct.price}
            </div>
            <div className="product-view">
              <H6 className="f-w-600">{ProductDetails}</H6>
              <P className="mb-0">{singleProduct.discription}</P>
            </div>
            <div className="product-size my-2">
              <UL className="simple-list flex-row">
                {ProductSizeArray.map((items, i) => (
                  <LI key={i} className="me-2"><Btn color="outline-light">{items}</Btn></LI>
                ))}
              </UL>
            </div>
            <div className="product-qnty">
              <H6 className="f-w-600">{Quantity}</H6>
              <fieldset>
                <InputGroup className="bootstrap-touchspin">
                  <Btn color="primary" className="bootstrap-touchspin-down btn-square" onClick={minusQty}><i className="fa fa-minus"></i></Btn>
                  <InputGroupText className="bootstrap-touchspin-prefix" style={{ display: "none" }}></InputGroupText>
                  <Input className="touchspin text-center" type="text" name="quantity" value={quantity} onChange={(e) => changeQty(e)}/>
                  <InputGroupText className="bootstrap-touchspin-postfix" style={{ display: "none" }}></InputGroupText>
                  <Btn color="primary" className="bootstrap-touchspin-up btn-square" onClick={plusQty}><i className="fa fa-plus"></i></Btn>
                </InputGroup>
                <br />
              </fieldset>
              <div className="addcart-btn">
                <Link to={`${process.env.PUBLIC_URL}/ECommerce/Cart`} className="btn btn-primary text-white me-3" onClick={() => AddToCarts(singleProduct)}>{AddToCart}</Link>
                <Link to={`${process.env.PUBLIC_URL}/ECommerce/ProductPage/${singleProduct.id}`} className="btn btn-primary text-white">{ViewDetails}</Link>
              </div>
            </div>
          </Col>
        </Row>
      </ModalHeader>
    </Modal>
  );
};
export default ProductModal;
