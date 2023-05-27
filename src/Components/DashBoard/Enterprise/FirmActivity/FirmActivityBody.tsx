import { CardBody } from "reactstrap";
import { Image, LI, P, UL } from "../../../../AbstractElements";
import { FirmActivityDatas } from "../../../../Data/DashBoard/Enterprise/firmActivity";
import { dynamicImage } from "../../../../Service";
import { Link } from "react-router-dom";

const FirmActivityBody = () => {
  
  return (
    <CardBody className=" p-0">
      <UL>
        {FirmActivityDatas.map((data, index) => (
          <LI key={index}>
            <div className="d-flex">
              <Image
                className="img-40 m-r-15 rounded-circle"
                src={dynamicImage(`user/${data.imgSrc}`)}
                alt={data.Tittle}
              />
              <div className="flex-grow-1">
                <span>
                <Link to={`${process.env.PUBLIC_URL}/user/user-profile`}>
                  <span className="f-w-600">{data.Tittle}</span> 
                </Link>
                  {data.Text}
                  {data?.assigned && (
                    <span className="f-w-600">{data.assigned}</span>
                  )}
                </span>
                <P>{data.Time}</P>
              </div>
            </div>
          </LI>
        ))}
      </UL>
    </CardBody>
  );
};

export default FirmActivityBody;
