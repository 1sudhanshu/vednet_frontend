import { LI, UL } from "../../../../AbstractElements";
import { Socialdatas } from "../../../../Data/widgets/SocialCard";

const SocialCard = () => {
  return (
    <UL className="card-social d-block border-0">
      {Socialdatas.map((data, index) => (
        <LI key={index} className="border-0">
          <a href={data.href}>{data.icon} </a>
        </LI>
      ))}
    </UL>
  );
};

export default SocialCard;
