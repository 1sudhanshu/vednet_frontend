import { CardBody, Table } from "reactstrap";
import { JoinedGroupsDatas } from "../../../../Data/DashBoard/Social Dashboard/JoinedGroups";
import { Btn, Image } from "../../../../AbstractElements";
import { Link } from "react-router-dom";

const JoinedGroupsBody = () => {
  const images = require.context("../../../../assets/images/user", true);
  const dynamicImage = (image: string) => {
    return images(`./${image}`);
  };
  return (
    <CardBody className="p-0">
      <div className="table-responsive groups-table agent-performance-table theme-scrollbar">
        <Table className="table">
          <tbody>
            {JoinedGroupsDatas.map((data, index) => (
              <tr key={index}>
                <td>
                  <div className="d-inline-block align-middle">
                    <Image
                      body={true}
                      className="img-radius img-40 align-top m-r-15 rounded-circle"
                      src={dynamicImage(data.imgSrc)}
                      alt=""
                    />
                    <div className="d-inline-block">
                      <Link to={`${process.env.PUBLIC_URL}/user/user-profile`}>
                        <span className="f-w-600">{data.tittle}</span>
                      </Link>
                      <span className={`d-block f-12 ${data.spanClass}`}>
                        {data.span}
                      </span>
                    </div>
                  </div>
                </td>
                <td>
                  <span>{data.member}</span>
                </td>
                <td>
                  <Btn color="deafult" className={`${data.btnclass} btn-xs`}>
                    leave group
                  </Btn>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </CardBody>
  );
};
export default JoinedGroupsBody;