import { CardBody } from "reactstrap";
import { H6, LI, UL } from "../../../../AbstractElements";
import { RecentActivityData } from "../../../../Data/widgets/RecentActivity";

const RecentActivityBody = () => {
  return (
    <CardBody>
      <UL className="crm-activity simple-list theme-scrollbar">
        {RecentActivityData.map((data, index) => (
          <LI className="d-flex" key={index}>
            {data.SpanTag && (
              <span className={`me-3 ${data.SpanClass}`}>{data.span}</span>
            )}
            <div className="align-self-center flex-grow-1">
              {data.headingTag && <H6 className="mt-0">{data.Heading}</H6>}
              <UL className="dates flex-row">
                <LI className="digits">{data.Date}</LI>
                <LI className="digits">{data.Time}</LI>
              </UL>
            </div>
          </LI>
        ))}
      </UL>
    </CardBody>
  );
};

export default RecentActivityBody;
