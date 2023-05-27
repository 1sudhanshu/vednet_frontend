import { H5, H6, LI, P, UL } from "../../../../../AbstractElements";
import { ElanaSaintHeading, paragraph } from "../../../../../Constant";
import { HeaderDatas } from "../../../../../Data/DashBoard/Social Dashboard/Header";
import { Link } from "react-router-dom";

const ElanaSaintBody = () => {
  return (
    <div className="flex-grow-1">
      <Link to={`${process.env.PUBLIC_URL}/user/user-profile`}><H5>{ElanaSaintHeading}</H5></Link>
      <P className="f-12 mt-3">{paragraph} </P>
      <UL className="flex-row simple-list">
        {HeaderDatas.map((data, index) => (
          <LI key={index}>
            <H6 className={`counter mb-0 ${data.fontClass} f-w-600`}>
              {data.number}
            </H6>
            <P className="mb-0">{data.text}</P>
          </LI>
        ))}
      </UL>
    </div>
  );
};

export default ElanaSaintBody;
