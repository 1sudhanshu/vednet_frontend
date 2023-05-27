import { CardBody } from "reactstrap";
import { LI, P, UL } from "../../../../AbstractElements";
import { RecentActivityDatas } from "../../../../Data/DashBoard/Social Dashboard/RecentActivity";
import { Href } from "../../../../Constant";

const RecentActivityBody = () => {
  return (
    <CardBody className=" activity-social">
      <UL className="simple-list">
        {RecentActivityDatas.map((data, index) => (
          <LI key={index} className={`rounded-0 ${data.borderClass}`}>
            <small>{data.time}</small>
            <P className="mb-0">{data.paragraphText}</P>
            {data.postedBy && (
              <P>
                {data.Post} <a href={Href}>{data.postedBy}</a>
              </P>
            )}
          </LI>
        ))}
      </UL>
    </CardBody>
  );
};

export default RecentActivityBody;
