import { ProductCardDatas } from "../../../../Data/widgets/ProductCard";
import { Link } from "react-router-dom";

const ProductCardBody = () => {
  return (
    <tbody>
      {ProductCardDatas.map((data, index) => (
        <tr key={index}>
          <Link to={`${process.env.PUBLIC_URL}/ECommerce/Product`} className="p-0"><td>{data.Details}</td></Link>
          <td className="digits">{data.Quantity}</td>
          <td className={data.fontClass}>{data.Status}</td>
          <td>
            <div className={`span badge rounded-pill ${data.PriceClass}`}>
              {data.Price}
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default ProductCardBody;
