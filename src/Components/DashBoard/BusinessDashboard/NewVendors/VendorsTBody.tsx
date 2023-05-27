import { NewVendorsData } from "../../../../Data/DashBoard/BusinessDashboard/NewVendors";
import { Link } from "react-router-dom";

const VendorsTBody = () => {
  const images = require.context("../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <tbody>
      {NewVendorsData.map((data, index) => (
        <tr key={index}>
          <td>
            <div className="d-flex align-items-center align-middle">
              <img
                className="img-40 align-top m-r-15 b-r-10"
                src={dynamicImage(data.imageSrc)}
                alt="11"
              />
              <div className="d-inline-block">
                <Link to={`${process.env.PUBLIC_URL}/user/user-profile`}><span>{data.name}</span></Link>
              </div>
            </div>
          </td>
          <td>{data.icon}</td>
          <td>
            <span className="f-12">{data.Date}</span>
          </td>
          <td>
            <i>{data.Payment}</i>
          </td>
          <td>
            <span>{data.Amount}</span>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default VendorsTBody;
