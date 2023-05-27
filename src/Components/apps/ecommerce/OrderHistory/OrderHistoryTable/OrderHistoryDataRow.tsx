import { MoreHorizontal } from "react-feather";
import { Image } from "../../../../../AbstractElements";
import { Href } from "../../../../../Constant";
import { dynamicImage } from "../../../../../Service";
import { orderHistoryTableDataType } from "../../../../../Data/apps/ecommerce/orderHistory";

const OrderHistoryDataRow = ({ data }:orderHistoryTableDataType) => {
  return (
    <tr>
      <td>
        <Image className="img-fluid img-50" src={dynamicImage(data.imagePath)} alt="#"/>
      </td>
      <td>
        <div className="product-name">
          <a href={Href}>{data.productTittle}</a>
          <div className="order-process">
            <span className={`order-process-circle ${data.orderProcessClass ? data.orderProcessClass : ""}`}/>
            {data.orderProcess}
          </div>
        </div>
      </td>
      <td>{data.size}</td>
      <td>{data.color}</td>
      <td>{data.articleNumber}</td>
      <td>{data.Units}</td>
      <td>{data.Price}</td>
      <td>
        <MoreHorizontal />
      </td>
    </tr>
  );
};

export default OrderHistoryDataRow;
