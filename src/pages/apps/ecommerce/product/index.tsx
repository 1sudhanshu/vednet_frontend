import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import ProductContainer from "../../../../Components/apps/ecommerce/product/index";

const Product = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="ecommerce" title="Product" />
      <ProductContainer />
    </div>
  );
};

export default Product;
