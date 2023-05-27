import { Link } from "react-router-dom";
import { ProductDetailsData } from "../../../../Data/DashBoard/BusinessDashboard/ProductDetails";

const ProductTableBody = () => {
  return (
    <tbody>
      {ProductDetailsData.map((data, index) => (
        <tr key={index}>
          <td>
            <div className="d-flex">
              <div className="round-product round-product-dark m-r-15">
                {data.icon}
              </div>
              <Link to={`${process.env.PUBLIC_URL}/ECommerce/Product`}><span>{data.tittle}</span></Link>
            </div>
          </td>
          <td>
            <span className="f-12">{data.sale}</span>
          </td>
          <td>
            <div className="progress-showcase">
              <div className="progress sm-progress-bar">
                <div
                  className={`progress-bar ${data.progressBarClass}`}
                  role="progressbar"
                  style={{ width: data.progressBar }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </td>
          <td>{data.Mrp}</td>
          <td className={data.statusClass}>{data.status}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default ProductTableBody;
