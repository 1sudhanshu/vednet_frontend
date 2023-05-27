import { H6, P } from "../../../../AbstractElements";
import { activityLogData } from "../../../../Data/apps/SocialApp";

interface propsTypes {
  Heading: string;
}

const MyActivity = ({ Heading }: propsTypes) => {
  return (
    <div className="my-activity">
      <H6 className="f-w-600">{Heading}</H6>
      {activityLogData.map((item) => (
        <P key={item.id}>
          <span>{item.icon}</span>
          {item.description}
        </P>
      ))}
    </div>
  );
};

export default MyActivity;
