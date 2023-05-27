import Breadcrumbs from "../../../../CommonElements/Breadcrumbs";
import WishlistContainer from '../../../../Components/apps/ecommerce/Wishlist/index';

const Wishlist = () => {
  return (
    <div className="page-body">
      <Breadcrumbs parent="ecommerce" title="Wishlist" />
      <WishlistContainer />
    </div>
  );
};

export default Wishlist;
