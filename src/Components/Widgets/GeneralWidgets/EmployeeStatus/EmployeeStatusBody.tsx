import { EmployeeStatusDatas } from "../../../../Data/widgets/EmployeeStatus";
import { H6, Image } from "../../../../AbstractElements";
import { Link } from "react-router-dom";

const EmployeeStatusBody = () => {
  const images = require.context("../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <tbody>
      {EmployeeStatusDatas.map((data, index) => (
        <tr key={index}>
          <td className="bd-t-none u-s-tb">
            <div className="align-middle image-sm-size">
              <Image
                body={true}
                className="img-radius align-top m-r-15 rounded-circle"
                src={dynamicImage(data.imgSrc)}
                alt={data.tittle}
              />
              <div className="d-inline-block">
                <H6>
                  <Link to={`${process.env.PUBLIC_URL}/user/user-profile`}>
                    {data.tittle}
                  </Link> <span className="text-muted digits">{data.spanHead}</span>
                </H6>
              </div>
            </div>
          </td>
          <td>{data.designation}</td>
          <td>
            <div className="progress-showcase">
              <div className="progress" style={{ height: 8 }}>
                <div
                  className={`progress-bar ${data.skilClass}`}
                  role="progressbar"
                  style={{ width: data.skilLevel }}
                  aria-valuenow={50}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
            </div>
          </td>
          <td className="digits">{data.Experience}</td>
        </tr>
      ))}
    </tbody>
  );
};

export default EmployeeStatusBody;
