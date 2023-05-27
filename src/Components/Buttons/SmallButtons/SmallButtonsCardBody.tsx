import { CardBody } from "reactstrap";
import { SmallButtonsData } from "../../../Data/Buttons";
import { Btn } from "../../../AbstractElements";

const SmallButtonsCardBody = () => {
  return (
    <CardBody>
      <div className="btn-showcase">
        {SmallButtonsData.map((btnItem, i) => (
          <Btn color={btnItem.colorClass} size={btnItem.size} key={i}>
            {btnItem.title}
          </Btn>
        ))}
      </div>
    </CardBody>
  );
};
export default SmallButtonsCardBody;