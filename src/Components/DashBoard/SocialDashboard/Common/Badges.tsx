import { LI, UL } from "../../../../AbstractElements";
import { UserCardDatas } from "../../../../Data/DashBoard/Social Dashboard/Common";

const Badges = () => {
  return (
    <UL className="d-block">
      {UserCardDatas.map((data, index) => (
        <LI key={index} className="p-0 border-0">
          <div className={`badge rounded-pill mx-1 ${data.class}`}>
            {data.Tittle}
          </div>
        </LI>
      ))}
    </UL>
  );
};

export default Badges;
