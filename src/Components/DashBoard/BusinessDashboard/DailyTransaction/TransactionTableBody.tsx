import React from "react";
import { DailyTransactionData } from "../../../../Data/DashBoard/BusinessDashboard/DailyTransaction";
import { Image } from "../../../../AbstractElements";
import { Link } from "react-router-dom";

const TransactionTableBody = () => {
  const images = require.context("../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };

  return (
    <tbody>
      {DailyTransactionData.map((data, index) => (
        <tr key={index}>
          <td>
            <div className="d-flex align-item-center align-middle">
              <Image
                className="img-40 align-top m-r-15 b-r-10"
                src={dynamicImage(data.imageSrc)}
                alt="11"
              />
              <div className="d-inline-block">
              <Link to={`${process.env.PUBLIC_URL}/user/user-profile`}><span>{data.name}</span></Link>
              </div>
            </div>
          </td>
          <td>{data.invoiceNumber}</td>
          <td>
            <span className="f-12">{data.Time}</span>
          </td>
          <td>
            <span className={data.statusClass}>{data.Status}</span>
          </td>
          <td>
            <span>{data.Total}</span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TransactionTableBody;
