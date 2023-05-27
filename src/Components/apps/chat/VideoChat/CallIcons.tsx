import { LI, UL } from "../../../../AbstractElements";
import { Href } from "../../../../Constant";

const CallIcons = () => {
  const callIconsData = ["video-camera", "volume", "user"];
  return (
    <div className="call-icons">
      <UL className="list-inline simple-list flex-row d-inline-flex">
        {callIconsData.map((data, index) => (
          <LI className="list-inline-item" key={index}>
            <a href={Href}>
              <i className={`icon-${data}`} />
            </a>
          </LI>
        ))}
      </UL>
    </div>
  );
};

export default CallIcons;
