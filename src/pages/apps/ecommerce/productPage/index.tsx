import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import ProductPageContainer from "../../../../Components/apps/ecommerce/productPage/index";

const ProductPage = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="ecommerce" title="ProductPage" />
      <ProductPageContainer />
    </div>
  );
};

export default ProductPage;
