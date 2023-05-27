import { CardBody } from "reactstrap";
import { Image, LI, P, UL } from "../../../../AbstractElements";
import { ConnectionBodyDatas } from "../../../../Data/DashBoard/Social Dashboard/Connection";
import { ElisseJosonSan, FranciscoCA } from "../../../../Constant";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";

const ConnectionBody = () => {
  return (
    <CardBody className="p-0">
      <UL>
        {ConnectionBodyDatas.map((data, index) => (
          <LI key={index}>
            <div className="d-flex">
              <Image
                className="img-40 m-r-15 rounded-circle"
                src={dynamicImage(`user/${data.imageSrc}`)}
                alt={data.tittle}
              />
              <div className="flex-grow-1">
                <Link to={`${process.env.PUBLIC_URL}/user/user-profile`}>
                  <span className="f-w-600">{data.tittle}</span>
                </Link>
                <P>
                  <span className={data.spanClass}>{ElisseJosonSan} </span>
                  {FranciscoCA}
                </P>
              </div>
            </div>
          </LI>
        ))}
      </UL>
    </CardBody>
  );
};

export default ConnectionBody;
