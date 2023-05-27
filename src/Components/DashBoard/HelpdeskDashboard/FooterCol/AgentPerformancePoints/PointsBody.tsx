import { Link } from "react-router-dom";
import { Image, P } from "../../../../../AbstractElements";
import { AgentPerformancePointsdatas } from "../../../../../Data/Components/HelpdeskDashBoard/AgentPerformancePoint";

const PointsBody = () => {
  const images = require.context("../../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };

  return (
    <tbody>
      {AgentPerformancePointsdatas.map((data, index) => (
        <tr key={index}>
          <td>
            <div className="d-inline-block align-middle">
              <Image
                body={true}
                className="img-radius img-40 align-top m-r-15 rounded-circle"
                src={dynamicImage(data.imageSrc)}
                alt="121"
              />
              <div className="d-inline-block">
                <Link to={`${process.env.PUBLIC_URL}/user/user-profile`}><span className="f-12 f-w-600">{data.tittle}</span></Link>
                <span className="d-block">{data.subTiitle}</span>
              </div>
            </div>
          </td>
          <td>
            <div className="progress-showcase">
              <div className="progress sm-progress-bar">
                <div
                  className={`progress-bar ${data.progresBarClass}`}
                  role="progressbar"
                  style={{ width: data.progressbarWidth }}
                  aria-valuenow={25}
                  aria-valuemin={0}
                  aria-valuemax={100}
                />
              </div>
              <P className="f-w-600">{data.level}</P>
            </div>
          </td>
          <td>
            <P className="f-w-600">{data.progresBarPoint}</P>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default PointsBody;
