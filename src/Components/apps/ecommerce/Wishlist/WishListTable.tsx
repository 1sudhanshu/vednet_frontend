import { XCircle } from "react-feather";
import {Action,Availability,Href,InStock,NewOrders,Prdouct,PrdouctName,Price,} from "../../../../Constant";
import { Image } from "../../../../AbstractElements";
import { dynamicImage } from "../../../../Service";
import { WishListTableData } from "../../../../Data/apps/ecommerce/WishListTable";

const WishListTable = () => {

  return (
    <div className="order-history table-responsive wishlist">
      <table className="table table-bordernone">
        <thead>
          <tr>
            <th>{Prdouct}</th>
            <th>{PrdouctName}</th>
            <th>{Price}</th>
            <th>{Availability}</th>
            <th>{Action}</th>
          </tr>
        </thead>
        <tbody>
          <tr className="title-orders">
            <td>{NewOrders}</td>
          </tr>
          {WishListTableData.map((data, index) => (
            <tr key={index}>
              <td>
                <Image className="img-fluid img-60" src={dynamicImage(`product/${data.imageName}`)} alt="#"/>
              </td>
              <td>
                <div className="product-name"><a href={Href}>{data.ProductTittle}</a></div>
              </td>
              <td>{data.productPrice}</td>
              <td>{InStock}</td>
              <td><XCircle /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishListTable;
