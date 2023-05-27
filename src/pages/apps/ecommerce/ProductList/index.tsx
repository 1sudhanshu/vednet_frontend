import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import ProductListContainer from "../../../../Components/apps/ecommerce/ProductList/index";

const ProductList = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="ecommerce" title="ProductList" />
      <ProductListContainer />
    </div>
  );
};

export default ProductList;
