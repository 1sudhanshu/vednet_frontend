import { Image, LI, UL } from "../../../../../../AbstractElements";
import { UncontrolledTooltip } from "reactstrap";
import { dynamicImage } from "../../../../../../Service";
import { SocialGroupData } from "../../../../../../Data/apps/SocialApp";

const SocialGroup = () => {
  return (
    <UL className="flex-row simple-list justify-content-center">
      {SocialGroupData.map((data, index) => (
        <LI className="d-inline-block" key={index}>
          <Image
            className="img-30 rounded-circle"
            src={dynamicImage(`user/${data.imageName}`)}
            alt="Img"
            id={`UncontrolledTooltipExample-${index}`}
          />
          <UncontrolledTooltip
            placement="top"
            target={`UncontrolledTooltipExample-${index}`}
          >
            {data.userName}
          </UncontrolledTooltip>
        </LI>
      ))}
    </UL>
  );
};

export default SocialGroup;
