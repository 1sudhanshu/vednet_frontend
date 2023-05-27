import ProductSidebar from './ProductSidebar';
import ProductTotal from './ProductTotal';

const ProductFeatures = () => {
  return (
      <div className="feature-products">
        <ProductTotal />
        <ProductSidebar />
      </div>
  );
};
export default ProductFeatures;